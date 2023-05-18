import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../constants/sizeConstants';

export const modalVar = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: -100, transition: { duration: 0.5 } },
};

export const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  right: -100px;
  top: 0px;
  width: 50%;
  height: 100%;
  z-index: 31;
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.textColor};
`;

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
  padding: 5% 10% 0% 10%;
`;

export const Header = styled.div`
  ${media.desktop`font-size: 12px`};
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
  height: 70%;
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
  ${media.desktop`
    div {
      &:last-child {
        font-size: 10px;
        margin-bottom: 50px;
      }
    }
    & img,
    video {
      height: 50vw;
    }
  `};
`;

export const MainContentsListTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 900;
  color: #8e44ad;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;

export const MainContentsListContents = styled.div`
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 23px;

  ul {
    width: 95%;
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 20px;
      list-style: inside;
    }
  }
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
  ${media.desktop`font-size: 11px`};
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
