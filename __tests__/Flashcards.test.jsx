import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Flashcards from "../src/Flashcards/Flashcards.jsx";

test("Renders 3 flashcard components", () => {
  render(<Flashcards />);
  const flashcards = screen.getAllByText("🤔");
  expect(flashcards).toHaveLength(3);
});
