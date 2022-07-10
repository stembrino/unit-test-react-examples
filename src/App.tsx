import React from "react";
import "./App.css";
import CounterPanel from "./components/CounterPanel/CounterPanel";
import Header from "./components/Header/Header";
import WrapProviders from "./store/WrapProviders";

function App() {
  return (
    <WrapProviders>
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="mian-content">
          <CounterPanel />
        </main>
      </div>
    </WrapProviders>
  );
}

export default App;
