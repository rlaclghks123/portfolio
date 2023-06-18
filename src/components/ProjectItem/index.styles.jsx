import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../constants/sizeConstants';

export const StyleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadow};

  margin: 0 auto;

  width: 80%;
  height: 20rem;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

export const StyleImg = styled.img`
  height: 19rem;
  width: 100%;

  border-radius: 20px 20px 0px 0px;
`;

export const StyleContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 5rem;

  border-radius: 0px 0px 20px 20px;
  padding: 10px;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  background-color: ${(props) => (props.hoverd ? 'rgba(0,0,0,0.1)' : `${props.theme.boxBgColor}`)};

  overflow: hidden;
`;

export const StyleTitle = styled.div`
  font-size: 19px;
  font-weight: 700;

  color: ${(props) => props.theme.textColor};
  opacity: 0.8;
`;

export const StyleLanguageList = styled.ul`
  display: flex;
  font-size: 12px;
`;

export const StyleLanguageLi = styled.li`
  padding: 2px;
  margin-right: 5px;

  border-radius: 3px;

  color: white;
  background-color: ${(props) => props.bgColor};
`;

export const StyleProjectType = styled.div`
  margin-right: 5px;

  color: white;

  font-size: 13px;

  display: flex;

  div {
    border-radius: 3px;
    padding: 2px;
    background-color: ${(props) => props.bgColor};
  }
`;
