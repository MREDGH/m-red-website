import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Portal } from "./portal";

describe("Portal", () => {
  it("should render as null (deprecated component)", () => {
    const { container } = render(<Portal />);
    expect(container.innerHTML).toBe("");
  });
});
