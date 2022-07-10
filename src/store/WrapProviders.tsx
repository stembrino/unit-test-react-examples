import CounterPanelProvider from "./counter-panel-store/CounterPanelProvider";

const WrapProviders = (props: { children: JSX.Element }) => {
  return <CounterPanelProvider>{props.children}</CounterPanelProvider>;
};

export default WrapProviders;
