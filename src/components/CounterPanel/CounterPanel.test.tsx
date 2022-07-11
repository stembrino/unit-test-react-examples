import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CounterPanelProvider from "../../context/counter-panel-context/CounterPanelProvider";
import WrapProviders from "../../context/WrapProviders";
import CounterPanel from "./CounterPanel";

describe("<CounterPanel />", () => {
  describe("Simple Test with useContext mocked", () => {
    test("should contain the expected label", async () => {
      render(
        <CounterPanelProvider>
          <CounterPanel />
        </CounterPanelProvider>
      );
      expect(screen.getByRole("displayvalue").textContent).toBe("0");
    });

    test("should increase value when add button is clicked", async () => {
      render(
        <WrapProviders>
          <CounterPanel />
        </WrapProviders>
      );
      const buttonElement = screen.getByRole("button");
      fireEvent.click(buttonElement);
      expect(screen.getByRole("displayvalue").textContent).toBe("1");
      fireEvent.click(buttonElement);
      expect(screen.getByRole("displayvalue").textContent).toBe("2");
    });
  });
});
