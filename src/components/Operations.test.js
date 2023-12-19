import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Operations from "./Operations";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Operations url="/farm/operations" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Operations");
});
