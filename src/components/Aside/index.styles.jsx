import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40%;
  height: 100%;
  z-index: 31;
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.textColor};
`;

export const modalVar = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const DarkBgColorAtModal = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 7% 10%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  margin-bottom: 5%;
  padding-right: 5%;
  box-sizing: border-box;

  svg {
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 75%;
  overflow: scroll;
  margin: 3% 0;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const MainContentsList = styled.div`
  margin-bottom: 7%;
`;

export const MainContentsListTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 900;
`;

export const MainContentsListContents = styled.div`
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 23px;
`;

export const BlankUrl = styled.div`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 50vh;
`;

export const PreviewVideo = styled.video`
  width: 100%;
  height: 50vh;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 2%;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.textColor};

  :hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.boxBgColor};
  }
`;
