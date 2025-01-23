import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/Footer/Footer.jsx";

test("Footer renders correctly", () => { 
    render(<Footer />); 
    expect(screen.getByText("Built with React")).toBeDefined();
})