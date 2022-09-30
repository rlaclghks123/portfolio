import { motion } from "framer-motion";
import React from "react";

import styled from "styled-components";

import Ipad from "../Ipad/Ipad";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
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
  return (
    <Wrapper>
      <motion.div>
        <Ipad />
      </motion.div>
    </Wrapper>
  );
}

export default Cover;
