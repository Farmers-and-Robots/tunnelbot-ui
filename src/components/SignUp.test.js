import React from "react"
import {render, screen} from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import SignIn from "./SignUp"
import { BrowserRouter as Router } from "react-router-dom";
import {act} from "react-dom/test-utils";


test("loads and displays SignUp link", async () => {
  // ARRANGE
  render(
    <Router>
      <SignIn url="/signup" />
    </Router>)

  // ACT
  act(() => {
    fireEvent.click(screen.getByText("Sign up"))
    screen.findByRole("heading")
  }
  )


  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Sign up")
})
