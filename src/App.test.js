import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";

describe("Routing integration tests", () => {
  test("navigating to /signup", async () => {
    // Given a browser history object
    const history = createMemoryHistory();

    // And the app is rendered with the history object
    render(
      <Router history={history}>
        <App/>
      </Router>
    );

    // When the "/signup" link is clicked
    fireEvent.click(screen.getByText(/No account/));

    // Then the URL should update to "/signup"
    await waitFor(() => expect(history.location.pathname).toEqual("/signup"));

    // And the about page should be displayed
    // expect(screen.getByText(/Sign Up/i)).toBeTruthy();
  });
})

//  test("navigating to non-existing route", async () => {
// Given a browser history…
