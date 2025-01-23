import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/Header/Header.jsx";

test("Header renders correctly", () => { 
    render(<Header />); 
    expect(screen.getByText("React Flashcards")).toBeDefined();
})