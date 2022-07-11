import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  describe("Test with useContext Mocked", () => {
    const mockAddValue = jest.fn();

    beforeAll(() => {
      // @ts-ignore
      React.useContext = () => {
        return { panelValue: "test", addValue: mockAddValue };
      };
    });

    test("should incrment the target value", () => {
      render(<Header />);
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);
      expect(mockAddValue).toHaveBeenCalledWith(5);
      expect(mockAddValue).toBeCalledTimes(1);
    });
  });
});
