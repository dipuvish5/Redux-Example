import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import ProductList from "./ProductList";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });

const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
      <ProductList />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
