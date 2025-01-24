import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";

test("Form renders correctly", () => {
  render(<App />);
  expect(screen.getByLabelText(/Question:/i)).toBeDefined();
  expect(screen.getByLabelText(/Answer:/i)).toBeDefined();
});
