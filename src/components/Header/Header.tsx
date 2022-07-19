import { useContext } from "react";
import { CounterPanelContext } from "../../context/counter-panel-context/CounterPanelProvider";
import Button from "../UI/Button/Button";

const Header = () => {
  const counterPanelContext = useContext(CounterPanelContext);
  const clickHandler = () => {
    counterPanelContext.addValue(5);
  };
  return (
    <div>
      <Button label="ADD FROM HEADER" onClick={clickHandler} />
    </div>
  );
};

export default Header;
