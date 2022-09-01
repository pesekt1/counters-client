import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Navbar text", () => {
  render(<App />);
  const linkElement = screen.getByText(/something/i);
  expect(linkElement).toBeInTheDocument();
});
