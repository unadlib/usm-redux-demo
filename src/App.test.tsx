import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "usm-redux";
import { Counter } from "./counter.service";

test("renders learn react link", () => {
  const counter = new Counter();

  const store = createStore({
    modules: [counter],
  });
  render(
    <Provider store={store}>
      <App counter={counter} />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
