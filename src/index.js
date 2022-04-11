import React from "react";
import { createStore } from "redux";
import App from "./App";

import { createRoot } from "react-dom/client";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
