import { shallow, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  shallow(<App />);
  const linkElement = screen.get(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
