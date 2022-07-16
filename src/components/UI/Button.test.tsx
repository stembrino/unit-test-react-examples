import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Simple Test Button", () => {
  const setUp = () => {
    const mockOnClickHandler = jest.fn();
    render(<Button ariaLabel="button" label="test" onClick={mockOnClickHandler} />);
    const buttonElement = screen.getByLabelText("button");
    return {
      screen,
      buttonElement,
      mockOnClickHandler,
    };
  };

  test("should contain the correct label", async () => {
    const { buttonElement } = setUp();

    expect(buttonElement.textContent).toBe("test");
  });

  test("should click handle be called when the button is clicked", async () => {
    const { buttonElement, mockOnClickHandler } = setUp();

    expect(mockOnClickHandler).not.toBeCalled();
    fireEvent.click(buttonElement);
    expect(mockOnClickHandler).toBeCalledTimes(1);
  });
});
