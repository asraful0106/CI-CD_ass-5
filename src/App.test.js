import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders CI/CD demo heading", () => {
  render(<App />);
  const heading = screen.getByText(/React CI\/CD Demo/i);
  expect(heading).toBeInTheDocument();
});

test("renders development branch info", () => {
  render(<App />);
  const branchText = screen.getByText(/development/i);
  expect(branchText).toBeInTheDocument();
});
