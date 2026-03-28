import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Portal } from "./portal";
import { LanguageProvider } from "./language-provider";

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe("Portal", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render the section title", () => {
    renderWithProvider(<Portal />);
    expect(screen.getByText("Client Portal")).toBeInTheDocument();
  });

  it("should render the CTA button", () => {
    renderWithProvider(<Portal />);
    expect(screen.getByText("Login to DDT")).toBeInTheDocument();
  });

  it("should link to the DDT login page", () => {
    renderWithProvider(<Portal />);
    const link = screen.getByText("Login to DDT").closest("a");
    expect(link).toHaveAttribute(
      "href",
      "https://m-red-ddt.provatoplayground.nl/login"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render the description text", () => {
    renderWithProvider(<Portal />);
    expect(
      screen.getByText(/Development Discovery Tool/)
    ).toBeInTheDocument();
  });
});
