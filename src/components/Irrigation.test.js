import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Irrigation from "./Irrigation";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Irrigation url="/farm/irrigation" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Irrigation");
});
