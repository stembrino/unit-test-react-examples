import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Simple Test Button", () => {
  test("should contain the correct label", async () => {
    render(<Button label="test" clickHandler={() => {}} />);
    const buttonElementLabel = screen.getByRole("button").textContent;
    expect(buttonElementLabel).toBe("test");
  });

  test("should click handle be called when the button is clicked", async () => {
    const mockClickHandler = jest.fn();
    render(<Button label="" clickHandler={mockClickHandler} />);
    expect(mockClickHandler).not.toBeCalled();
    // (await screen.findByRole("button")).click();
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(mockClickHandler).toBeCalledTimes(1);
  });
});
