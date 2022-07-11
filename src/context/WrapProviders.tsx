import CounterPanelProvider from "./counter-panel-context/CounterPanelProvider";

const WrapProviders = (props: { children: JSX.Element }) => {
  return <CounterPanelProvider>{props.children}</CounterPanelProvider>;
};

export default WrapProviders;
