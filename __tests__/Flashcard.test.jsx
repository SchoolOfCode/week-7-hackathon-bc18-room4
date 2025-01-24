import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Flashcard from "../src/Flashcards/Flashcard/Flashcard.jsx";

test("Renders 3 flashcard components", () => {
  render(<Flashcard />);

  expect(screen.getAllByText("🤔")).toBeDefined();
});
