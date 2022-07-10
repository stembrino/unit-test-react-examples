import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CounterPanel from "./CounterPanel";

describe("<CounterPanel />", () => {
  describe("Simple Test with useContext mocked", () => {
    const mockAddValue = jest.fn();

    beforeAll(() => {
      // @ts-ignore
      React.useContext = () => {
        return { panelValue: "test", addValue: mockAddValue };
      };
    });

    test("should contain the expected label", async () => {
      render(<CounterPanel />);
      expect(screen.getByRole("displayvalue").textContent).toBe("test");
    });

    test("should increase value when add button is clicked", async () => {
      render(<CounterPanel />);
      expect(mockAddValue).not.toBeCalled();
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);
      expect(mockAddValue).toBeCalledTimes(1);
    });
  });
});
