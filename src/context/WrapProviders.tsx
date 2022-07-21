import CounterPanelProvider from "./counter-panel-context/CounterPanelProvider";
import UserProvider from "./user-context/UserProvider";

const WrapProviders = (props: { children: JSX.Element }) => {
  return (
    <CounterPanelProvider>
      <UserProvider>{props.children}</UserProvider>
    </CounterPanelProvider>
  );
};

export default WrapProviders;
