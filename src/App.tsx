import React from "react";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./counter.service";

function App({ counter }: { counter: Counter }) {
  const count = useSelector(() => counter.count);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={() => counter.increase()}>
          {count.sum}
        </button>
      </header>
    </div>
  );
}

export default App;
