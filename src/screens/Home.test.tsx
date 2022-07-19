import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  const setUp = () => {
    render(<Home />);
    return {
      screen,
    };
  };

  it("TODO", () => {});
});
