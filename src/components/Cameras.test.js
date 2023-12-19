import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cameras from "./Cameras";

test("loads component", async () => {
  // ARRANGE
  render(
    <Router>
      <Cameras url="/farm/cameras" />
    </Router>,
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Cameras");
});
