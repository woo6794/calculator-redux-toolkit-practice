import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { equalSign, updateDisplayOperator } from "../store/keypad";

const Operator = () => {
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Buttons
        onClick={() => {
          dispatch(updateDisplayOperator("+"));
        }}
      >
        +
      </Buttons>
      <Buttons
        onClick={() => {
          dispatch(updateDisplayOperator("-"));
        }}
      >
        -
      </Buttons>
      <Buttons
        onClick={() => {
          dispatch(updateDisplayOperator("*"));
        }}
      >
        *
      </Buttons>
      <Buttons
        onClick={() => {
          dispatch(updateDisplayOperator("/"));
        }}
      >
        /
      </Buttons>
      <Buttons
        onClick={() => {
          dispatch(equalSign());
        }}
      >
        =
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.button`
  width: 75px;
  height: 50px;
  margin: 5px 0;
  :last-child {
    margin: 5px 0 0 0;
  }
`;

export default Operator;
