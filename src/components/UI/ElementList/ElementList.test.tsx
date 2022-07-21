import { render, screen } from "@testing-library/react";
import ElementList from "./ElementList";

describe("<ElementList />", () => {
  const setUp = () => {
    render(<ElementList text="test" email="test@test" />);
    const liElement = screen.getByLabelText(/line/i);
    return { screen, liElement };
  };

  it("Should text be test", () => {
    const { liElement } = setUp();
    expect(liElement.textContent).toBe("test | test@test");
  });
});
