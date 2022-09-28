import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-image: url("images/blueDesk.jpg");
  background-position: center;
  background-size: cover;
`;

function Cover() {
  return <Wrapper></Wrapper>;
}

export default Cover;
