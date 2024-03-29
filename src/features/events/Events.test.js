import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Events from "./Events";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Events url="/farm/events" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Farm");
});
