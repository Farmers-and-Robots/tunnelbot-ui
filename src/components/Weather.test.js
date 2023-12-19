import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Weather from "./Weather";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Weather url="/farm/weather" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Weather");
});
