import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "../../context/ThemeContext";
import Home from "../Home";

vi.mock("aos", () => ({
  default: { init: vi.fn() },
  init: vi.fn(),
}));

function TestWrapper({ children }) {
  return (
    <HelmetProvider>
      <MemoryRouter>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
}

test("renders home page with heading", () => {
  render(<Home />, { wrapper: TestWrapper });

  expect(screen.getByText(/Stephen Odhiambo Oginga/i)).toBeInTheDocument();
  expect(screen.getByText(/integrate AI/i)).toBeInTheDocument();
});

test("renders skills section", () => {
  render(<Home />, { wrapper: TestWrapper });

  expect(screen.getByText("Skills & Depth")).toBeInTheDocument();
  expect(screen.getByText("Front-End")).toBeInTheDocument();
  expect(screen.getByText("Back-End")).toBeInTheDocument();
  expect(screen.getByText("Languages")).toBeInTheDocument();
  expect(screen.getByText("Tools & Platforms")).toBeInTheDocument();
  expect(screen.getAllByText("AI Integration").length).toBe(2);
});

test("renders resume download button", () => {
  render(<Home />, { wrapper: TestWrapper });

  const resumeBtn = screen.getByText(/Resume/i);
  expect(resumeBtn).toBeInTheDocument();
  expect(resumeBtn.closest("a")).toHaveAttribute("href", "/resume.pdf");
});
