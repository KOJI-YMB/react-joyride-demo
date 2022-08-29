import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { createRoot } from "react-dom/client";
import { Home, RouteA, RouteB } from "./routes";
import { rootReducer } from "./reducers";
import JoyrideSample from "./JoyrideSample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <JoyrideSample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="a" element={<RouteA />} />
        <Route path="b" element={<RouteB />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
