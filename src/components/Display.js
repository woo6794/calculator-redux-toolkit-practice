import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Display = () => {
  const display = useSelector((state) => state.keypad.display);
  const result = useSelector((state) => state.keypad.result);
  const operator = useSelector((state) => state.keypad.operator);
  return (
    <Wrap>
      <Label>{operator}</Label>
      <NumberDisplay value={display} />
      <Result value={result} />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  position: absolute;
  margin: 5px 0 0 10px;
  font-size: 20px;
`;

const NumberDisplay = styled.input`
  text-align: right;
  font-size: 50px;
  margin: 5px 0 10px;
`;

const Result = styled.input`
  //display: none;
  text-align: right;
  font-size: 30px;
  margin: 10px 0 5px;
`;

export default Display;
