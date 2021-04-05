import React, { useCallback } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  updateDisplayNumber,
  ClearDisplay,
  ChangePlusMinus,
  ChangeDecimal,
  RemoveDisplay,
} from "../store/keypad";

const craeteButtonModel = (num) => {
  return {
    id: uuidv4(),
    num,
  };
};

const buttons = Array(9)
  .fill()
  .map((item, index) => craeteButtonModel(index + 1));

const KeyPad = () => {
  const dispatch = useDispatch();
  const onClickBtn = useCallback(
    (e) => {
      dispatch(updateDisplayNumber(e.target.value));
    },
    [dispatch]
  );
  const onClickClearBtn = useCallback(
    (e) => {
      dispatch(ClearDisplay());
    },
    [dispatch]
  );
  return (
    <Wrap>
      <AcBtn onClick={onClickClearBtn}>AC</AcBtn>
      <NumberBtn
        onClick={() => {
          dispatch(RemoveDisplay());
        }}
      >
        ←
      </NumberBtn>
      {buttons.map((item) => (
        <NumberBtn key={item.id} value={item.num} onClick={onClickBtn}>
          {item.num}
        </NumberBtn>
      ))}
      <NumberBtn
        onClick={() => {
          dispatch(ChangePlusMinus("-"));
        }}
      >
        +/-
      </NumberBtn>
      <NumberBtn value="0" onClick={onClickBtn}>
        0
      </NumberBtn>
      <NumberBtn
        value="."
        onClick={() => {
          dispatch(ChangeDecimal("."));
        }}
      >
        .
      </NumberBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 330px;
`;

const NumberBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px 8px 5px 0;
`;

const AcBtn = styled.button`
  width: 208px;
  height: 50px;
  margin: 5px 8px 5px 0;
`;

export default KeyPad;
