import React from "react";
import "./App.css";
import CounterPanel from "./components/CounterPanel/CounterPanel";
import Header from "./components/Header/Header";
import WrapProviders from "./context/WrapProviders";
import Home from "./screens/Home";

function App() {
  return (
    <WrapProviders>
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="mian-content">
          <CounterPanel />
          <hr></hr>
          <h3>User List</h3>
          <Home />
        </main>
      </div>
    </WrapProviders>
  );
}

export default App;
