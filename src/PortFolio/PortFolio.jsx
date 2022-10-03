import { AnimatePresence } from "framer-motion";
import React from "react";

import styled from "styled-components";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";

const PortFolioWrapper = styled.div`
  width: 100vw;
  height: 300vh;
  margin-top: 50px;
  background: ${props => props.theme.bgColor};
`;

function PortFolio() {
  return (
    <AnimatePresence>
      <PortFolioWrapper>
        <NavBar />

        <About />
      </PortFolioWrapper>
    </AnimatePresence>
  );
}

export default PortFolio;
