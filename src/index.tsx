import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "usm-redux";
import { compose } from "redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Counter } from "./counter.service";

const counter = new Counter();

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

// const reduxEnhancer = composeEnhancers(
//   applyMiddleware(...middleware)
//   // other store enhancers if any
// );

const store = createStore(
  {
    modules: [counter],
  },
  undefined,
  {
    reduxEnhancer: composeEnhancers(),
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App counter={counter} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
