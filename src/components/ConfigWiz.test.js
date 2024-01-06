import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { FabConfigWiz, FarmConfigWiz } from "./ConfigWiz";

test("Fab opens dialog when clicked", () => {
  render(<FabConfigWiz wizTitle={"Add Tunnel"} action={"addTunnel"} />);

  const addButton = screen.getByTestId("add");
  fireEvent.click(addButton);

  expect(screen.getByText("Add Tunnel").toBeTruthy);
});

test("Farm opens dialog when clicked", () => {
  render(<FarmConfigWiz wizTitle={"Create a Farm"} />);

  const addButton = screen.getByTestId("addFarm");
  fireEvent.click(addButton);

  expect(screen.getByTestId("wizTitle")).toHaveTextContent("Create a Farm");
});
