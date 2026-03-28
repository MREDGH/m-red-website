import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "./hero";
import { LanguageProvider } from "./language-provider";

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe("Hero", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render the M letter", () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText("M")).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText("Real Estate Development")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText("Focus")).toBeInTheDocument();
    expect(screen.getByText("Principles")).toBeInTheDocument();
    expect(screen.getByText("Approach")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should have correct section anchor links", () => {
    renderWithProvider(<Hero />);
    const focusLink = screen.getByText("Focus").closest("a");
    expect(focusLink).toHaveAttribute("href", "#philosophy");
  });

  it("should render language switcher", () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("NL")).toBeInTheDocument();
  });

  it("should toggle language when clicked", () => {
    renderWithProvider(<Hero />);
    const switcher = screen.getByRole("button", { name: /switch to/i });
    fireEvent.click(switcher);
    expect(screen.getByText("Principes")).toBeInTheDocument();
  });
});
