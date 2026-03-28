import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CookieBanner } from "./cookie-banner";
import { LanguageProvider } from "./language-provider";

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe("CookieBanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should show banner when no consent is stored", () => {
    renderWithProvider(<CookieBanner />);
    expect(screen.getByText("Accept")).toBeInTheDocument();
    expect(screen.getByText("Decline")).toBeInTheDocument();
  });

  it("should display cookie message", () => {
    renderWithProvider(<CookieBanner />);
    expect(
      screen.getByText(/cookies to analyse website traffic/)
    ).toBeInTheDocument();
  });

  it("should hide banner when accepted", () => {
    renderWithProvider(<CookieBanner />);
    fireEvent.click(screen.getByText("Accept"));
    expect(screen.queryByText("Accept")).not.toBeInTheDocument();
    expect(localStorage.getItem("m-red-cookie-consent")).toBe("accepted");
  });

  it("should hide banner when declined", () => {
    renderWithProvider(<CookieBanner />);
    fireEvent.click(screen.getByText("Decline"));
    expect(screen.queryByText("Decline")).not.toBeInTheDocument();
    expect(localStorage.getItem("m-red-cookie-consent")).toBe("declined");
  });

  it("should not show banner when consent was already given", () => {
    localStorage.setItem("m-red-cookie-consent", "accepted");
    renderWithProvider(<CookieBanner />);
    expect(screen.queryByText("Accept")).not.toBeInTheDocument();
  });

  it("should not show banner when consent was already declined", () => {
    localStorage.setItem("m-red-cookie-consent", "declined");
    renderWithProvider(<CookieBanner />);
    expect(screen.queryByText("Decline")).not.toBeInTheDocument();
  });
});
