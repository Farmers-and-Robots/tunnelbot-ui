import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Devices from "./Devices";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Devices url="/farm/devices" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Devices");
});
