import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../constants/sizeConstants';

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.navBgColor};
  color: ${(props) => props.theme.navColor};
  border-bottom: 0.1px solid rgba(44, 62, 80, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 0 1%;
  box-sizing: border-box;
`;

export const Logo = styled(motion.div)`
  padding: 3px;
  margin: 0px 15px;
  cursor: pointer;
  box-shadow: 0px 0px 3px ${(props) => props.theme.navColor};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.2vw;
    height: 1.2vw;
    fill: ${(props) => props.theme.textColor};
    stroke-width: 25px;
    stroke: ${(props) => props.theme.navBgColor};
  }
`;

export const TitleColumns = styled.ul`
  ${media.tablet`
  width: 40%;
  `};

  width: 27%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.li`
  margin: 0px auto;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.5;
  }
`;

export const TitleName = styled(motion.span)`
  color: ${(props) => props.theme.textColor};
  font-size: 1.3vw;
`;

export const CurrentLocation = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #95a5a6;
`;
