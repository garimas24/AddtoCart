import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux"; // ✅ Correct import
import { Provider } from "react-redux";
import rootReducer from "./services/Reducer/index";

const store = createStore(rootReducer);

// ✅ Corrected React 18 Rendering Method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ✅ Ensure serviceWorker.js exists before using this
serviceWorker.unregister();
