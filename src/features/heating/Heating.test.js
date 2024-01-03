import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Heating from "./Heating";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Heating url="/farm/heating" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Heating");
});
