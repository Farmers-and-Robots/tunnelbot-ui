import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./SignUp";

test("loads and displays SignUp link", async () => {
  // ARRANGE
  render(
    <Router>
      <SignIn />
    </Router>,
  );

  // Add info and click.
  const firstNameInput = screen.getByRole("textbox", {
    name: "First Name",
  });

  fireEvent.change(firstNameInput, {
    target: { value: "Tunnelbot" },
  });

  const lastNameInput = screen.getByRole("textbox", {
    name: "Last Name",
  });

  fireEvent.change(lastNameInput, {
    target: { value: "Tester" },
  });

  const emailInput = screen.getByRole("textbox", {
    name: "Email Address",
  });

  fireEvent.change(emailInput, {
    target: { value: "info@farmersandrobots.com" },
  });

  const pwdInput = screen.getByTestId("password").querySelector("input");
  fireEvent.change(pwdInput, {
    target: { value: process.env.TEST_PWD },
  });

  const signUpButton = screen.getByTestId("signup");
  fireEvent.click(signUpButton);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Tunnelbot");
});
