import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Ipad from "../Ipad/Ipad";

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

const Box = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 700px;
  top: 100px;
`;

function Cover() {
  return (
    <Wrapper>
      <Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Ipad />
        </motion.div>
      </Box>
    </Wrapper>
  );
}

export default Cover;
