import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CounterPanelProvider from "../../context/counter-panel-context/CounterPanelProvider";
import WrapProviders from "../../context/WrapProviders";
import CounterPanel from "./CounterPanel";

describe("<CounterPanel />", () => {
  describe("Simple Test with useContext - CounterPanelProvider", () => {
    const setUp = () => {
      render(
        <CounterPanelProvider>
          <CounterPanel />
        </CounterPanelProvider>
      );
      const displayElement = screen.getByLabelText("display");
      return {
        screen,
        displayElement,
      };
    };

    test("should contain the expected label", () => {
      const { displayElement } = setUp();
      expect(displayElement.textContent).toBe("0");
    });
  });

  describe("Simple Test with useContext - WrapProviders", () => {
    const setUp = () => {
      render(
        <WrapProviders>
          <CounterPanel />
        </WrapProviders>
      );
      const buttonElement = screen.getByRole("button");
      const displayElement = screen.getByLabelText("display");

      return {
        screen,
        buttonElement,
        displayElement,
      };
    };
    test("should increase value when add button is clicked", () => {
      const { buttonElement, displayElement } = setUp();
      fireEvent.click(buttonElement);
      expect(displayElement.textContent).toBe("1");
      fireEvent.click(buttonElement);
      expect(displayElement.textContent).toBe("2");
    });
  });
});
