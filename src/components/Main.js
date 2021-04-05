import React from "react";
import styled from "styled-components";
import Display from "./Display";
import KeyPad from "./KeyPad";
import Operator from "./Operator";

const Main = () => {
  return (
    <Wrap>
      <Calcuator>
        <Display />
        <Buttons>
          <KeyPad />
          <Operator />
        </Buttons>
      </Calcuator>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Calcuator = styled.div`
  border: 1px solid #000000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Buttons = styled.div`
  display: flex;
`;
export default Main;
