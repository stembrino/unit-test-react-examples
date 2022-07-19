import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  describe("Test with useContext Mocked", () => {
    const setUp = () => {
      const mockAddValue = jest.fn();
      // @ts-ignore
      React.useContext = () => {
        return { panelValue: "test", addValue: mockAddValue };
      };
      render(<Header />);
      const buttonElement = screen.getByRole("button");
      return {
        screen,
        buttonElement,
        mockAddValue,
      };
    };

    test("should incrment the target value", () => {
      const { buttonElement, mockAddValue } = setUp();
      fireEvent.click(buttonElement);
      expect(mockAddValue).toHaveBeenCalledWith(5);
      expect(mockAddValue).toBeCalledTimes(1);
    });
  });
});
