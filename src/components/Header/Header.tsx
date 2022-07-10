import { useContext } from "react";
import { CounterPanelContext } from "../../store/counter-panel-store/CounterPanelProvider";
import Button from "../UI/Button";

const Header = () => {
  const counterPanelContext = useContext(CounterPanelContext);
  const clickHandler = () => {
    counterPanelContext.addValue(1);
  };
  return (
    <div>
      <Button label="ADD FROM HEADER" clickHandler={clickHandler} />
    </div>
  );
};

export default Header;
