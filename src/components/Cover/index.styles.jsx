import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to Bottom, #222b33, #12171b);
`;

export const Logo = styled(motion.div)`
  width: max-content;
  height: max-content;
  box-shadow: 0px 0px 10px rgb(255, 255, 255);
`;

export const Svg = styled.svg`
  width: 30px;
  height: 30px;

  path {
    stroke: white;
    stroke-width: 2;
  }
`;

export const WrapperVar = {
  start: { opacity: 1, scale: 1 },
  end: {
    opacity: 0,
    x: -800,
    y: -400,
    scale: 0,
    transition: { delay: 3.5, duration: 1 },
  },
  exit: { opacity: 0 },
};

export const SvgVar = {
  start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  end: {
    pathLength: 3,
    fill: 'rgba(255, 255, 255, 1)',
  },
};
