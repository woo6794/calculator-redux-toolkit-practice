import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  display: "0",
  result: "0",
  operator: "",
  isChangedOnce: false,
};

const func = (result, operator, display) => {
  return new Function("return " + result + operator + display)();
};

const keypadSlice = createSlice({
  name: "keypad",
  initialState,
  reducers: {
    updateDisplayNumber(state, action) {
      if (!state.isChangedOnce) {
        state.display = action.payload;
        state.isChangedOnce = true;
      } else {
        state.display += action.payload;
      }
    },
    ClearDisplay(state) {
      state.display = "0";
      state.result = "0";
      state.operator = "";
      state.isChangedOnce = false;
    },
    ChangePlusMinus(state, action) {
      if (state.display[0] !== "-" && state.display !== "0") {
        state.display = action.payload + state.display;
      } else if (state.display !== "0") {
        state.display = state.display.slice(1);
      }
    },
    ChangeDecimal(state, action) {
      if (
        state.display.match(/\d$/) === null &&
        state.display.indexOf(".") === -1
      ) {
        state.display =
          state.display.slice(0, state.display.length - 1) + action.payload;
      }
      if (state.display.indexOf(".") === -1) {
        state.display += action.payload;
      }
    },
    RemoveDisplay(state) {
      if (state.display.length === 1 || state.display === "-0") {
        state.display = "0";
        state.result = "0";
      } else {
        state.display = state.display.slice(0, state.display.length - 1);
      }
    },
    equalSign(state) {
      if (state.display.match(/\d$/) === null || state.operator === "") {
        return;
      } else {
        const total = func(state.result, state.operator, state.display);
        state.display = total.toString();
        state.result = total.toString();
        state.isChangedOnce = false;
      }
    },
    updateDisplayOperator(state, action) {
      const total = func(state.result, action.payload, state.display);
      if (state.display[state.display.length - 1] === ".") {
        return;
      }
      state.result = total.toString();
      state.isChangedOnce = false;
      state.operator = action.payload;
    },
  },
});

export const {
  updateDisplayNumber,
  ClearDisplay,
  ChangePlusMinus,
  ChangeDecimal,
  RemoveDisplay,
  equalSign,
  updateDisplayOperator,
} = keypadSlice.actions;
export default keypadSlice.reducer;
