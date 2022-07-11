import { useContext } from "react";
import { CounterPanelContext } from "../../context/counter-panel-context/CounterPanelProvider";
import Button from "../UI/Button";
// import classes from "./CounterPanel.module.css";

const CounterPanel = () => {
  const counterPanelContext = useContext(CounterPanelContext);
  const addValueHandler = () => {
    counterPanelContext.addValue(1);
  };
  return (
    <div>
      <div role="displayvalue">{counterPanelContext.panelValue}</div>
      <Button clickHandler={addValueHandler} label="ADD" />
    </div>
  );
};

export default CounterPanel;
