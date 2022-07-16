import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemedSuspense from "./layout/ThemedSuspense";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<ThemedSuspense />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
