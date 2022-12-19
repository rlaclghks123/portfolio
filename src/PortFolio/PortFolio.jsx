import { AnimatePresence } from 'framer-motion';
import React from 'react';

import styled from 'styled-components';
import About from '../about/About.jsx';
import NavBar from '../navBar/NavBar';

const PortFolioWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
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
