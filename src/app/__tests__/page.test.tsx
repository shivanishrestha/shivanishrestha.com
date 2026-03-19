import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Home from "../page";

afterEach(cleanup);

test("renders name heading", () => {
  render(<Home />);
  expect(screen.getByText("Shivani Shrestha")).toBeDefined();
});

test("shows under construction message", () => {
  render(<Home />);
  expect(screen.getByText("Under construction")).toBeDefined();
});
