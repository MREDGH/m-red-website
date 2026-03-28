import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Values } from "./values";
import { LanguageProvider } from "./language-provider";

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe("Values", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render the section title", () => {
    renderWithProvider(<Values />);
    expect(screen.getByText("Our Value Creating Principles")).toBeInTheDocument();
  });

  it("should render all 6 value card titles", () => {
    renderWithProvider(<Values />);
    expect(screen.getByText("Vitality & Well-being")).toBeInTheDocument();
    expect(screen.getByText("Location Fit")).toBeInTheDocument();
    expect(screen.getByText("Data-driven Development")).toBeInTheDocument();
    expect(screen.getByText("Quality & Historical Awareness")).toBeInTheDocument();
    expect(screen.getByText("Partnership")).toBeInTheDocument();
    expect(screen.getByText("Innovation & Applied Intelligence")).toBeInTheDocument();
  });

  it("should render all subtitles", () => {
    renderWithProvider(<Values />);
    expect(screen.getByText("Health-Focused Design")).toBeInTheDocument();
    expect(screen.getByText("Care-Oriented Locations")).toBeInTheDocument();
  });

  it("should show Read More buttons", () => {
    renderWithProvider(<Values />);
    const readMoreButtons = screen.getAllByText("Read More");
    expect(readMoreButtons).toHaveLength(6);
  });

  it("should toggle to Read Less on click", () => {
    renderWithProvider(<Values />);
    const readMoreButtons = screen.getAllByText("Read More");
    fireEvent.click(readMoreButtons[0]);
    expect(screen.getByText("Read Less")).toBeInTheDocument();
  });
});
