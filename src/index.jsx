import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, combineReducers } from 'redux';
import { createRoot } from 'react-dom/client';
import Root from "./Root";
import RouteA from "./routes/RouteA";
import RouteB from "./routes/RouteB";

const initialState = {
  run: true,
  stepIndex: 0,
  tourCompleted: false
}

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RUN':
      return { ...state, run: action.run }
    case 'SET_STEP_INDEX':
      return { ...state, stepIndex: action.stepIndex }
    case 'SET_TOUR_COMPLETED':
      return { ...state, tourCompleted: action.tourCompleted }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  UI: UIReducer
})
const store = createStore(rootReducer)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route path="a" element={<RouteA />} />
          <Route path="b" element={<RouteB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
