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
      <div aria-label="display">{counterPanelContext.panelValue}</div>
      <Button onClick={addValueHandler} label="ADD" ariaLabel="add value button" />
    </div>
  );
};

export default CounterPanel;
