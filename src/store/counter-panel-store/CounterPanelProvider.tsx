import React, { createContext, useContext, useState } from "react";

interface CounterPanelContextInterface {
  panelValue: string;
  addValue: (valueToIncrease: number) => void;
}

export const CounterPanelContext = createContext({
  panelValue: "",
  addValue: (valueToIncrease: number): void => {},
} as CounterPanelContextInterface);

const CounterPanelProvider = (props: { children: JSX.Element }) => {
  const [panelValue, setPanelValue] = useState("0");

  const addValue = (valueToIncrease: number): void => {
    setPanelValue((prevValue: string) =>
      (Number.parseFloat(prevValue) + valueToIncrease).toString()
    );
  };

  const initialState: CounterPanelContextInterface = {
    panelValue: panelValue,
    addValue,
  };

  return (
    <CounterPanelContext.Provider value={initialState}>
      {props.children}
    </CounterPanelContext.Provider>
  );
};

export default CounterPanelProvider;
