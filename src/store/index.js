import { combineReducers, configureStore } from "@reduxjs/toolkit";
import keypad from "./keypad";

const reducer = combineReducers({
  keypad
});

const store = configureStore({
  reducer,
});

export default store;
