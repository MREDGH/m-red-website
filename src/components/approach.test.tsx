import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Approach } from "./approach";
import { LanguageProvider } from "./language-provider";

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe("Approach", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render section title", () => {
    renderWithProvider(<Approach />);
    expect(screen.getByText("Our Approach")).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    renderWithProvider(<Approach />);
    expect(
      screen.getByText("A Fully Managed Growth Partner for Healthcare Operators")
    ).toBeInTheDocument();
  });

  it("should render all three step titles", () => {
    renderWithProvider(<Approach />);
    expect(screen.getByText("Strategic Operator Alignment")).toBeInTheDocument();
    expect(screen.getByText("Location Identification & Development Shaping")).toBeInTheDocument();
    expect(screen.getByText("Acquisition, Development & Delivery")).toBeInTheDocument();
  });

  it("should have first accordion open by default", () => {
    renderWithProvider(<Approach />);
    const buttons = screen.getAllByRole("button");
    const firstAccordionButton = buttons.find((b) =>
      b.textContent?.includes("Strategic Operator Alignment")
    );
    expect(firstAccordionButton).toHaveAttribute("aria-expanded", "true");
  });

  it("should toggle accordion on click", () => {
    renderWithProvider(<Approach />);
    const buttons = screen.getAllByRole("button");
    const secondButton = buttons.find((b) =>
      b.textContent?.includes("Location Identification")
    );
    if (secondButton) {
      fireEvent.click(secondButton);
      expect(secondButton).toHaveAttribute("aria-expanded", "true");
    }
  });
});
