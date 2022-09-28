import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { openState } from "../atom";

const MainPage = styled(motion.div)`
  position: absolute;
  z-index: 3;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const MainVar = {
  start: { scale: 0, opacity: 0 },
  end: { scale: 1, opacity: 1, transition: { duration: 1.5 } },
};
function Contents() {
  const isOpen = useRecoilValue(openState);
  console.log(isOpen);
  return (
    <AnimatePresence>
      {isOpen ? (
        <MainPage variants={MainVar} initial="start" animate="end">
          PortFolio
        </MainPage>
      ) : null}
    </AnimatePresence>
  );
}

export default Contents;
