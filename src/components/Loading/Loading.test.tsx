import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("<Loading />", () => {
  const setUp = () => {
    render(<Loading />);
    const elementLoad = screen.getByLabelText(/loading/i);
    return {
      screen,
      elementLoad,
    };
  };
  it("Should component render a loading text", () => {
    const { elementLoad } = setUp();
    expect(elementLoad.textContent).toBe("Loading...");
  });
});
