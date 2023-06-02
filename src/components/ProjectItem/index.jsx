import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const lanBgColor = ['#2ecc71', '#9b59b6', '#7ed6df', '#ff7979', '#ffd32a', '#f0932b', '#e84393'];

function ProjectItem({ images, title, languageList, projectType }) {
  let [hover, setHover] = useState(false);
  let randomColor = lanBgColor[Math.floor(Math.random() * lanBgColor.length)];

  return (
    <StyleContainer
      variants={BoxMotion}
      initial="start"
      animate="end"
      whileHover="hover"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <StyleImg src={images[0]} alt="프로젝트 사진"></StyleImg>
      <StyleContents hoverd={hover}>
        <StyleTitle>
          <span>{'🚀'}</span>
          <span>{title}</span>
        </StyleTitle>
        <StyleLanguageList>
          <span>📌</span>
          {languageList.map((item, i) => {
            return (
              <StyleLanguageLi key={i} bgColor={randomColor}>
                {item}
              </StyleLanguageLi>
            );
          })}
        </StyleLanguageList>
        <StyleProjectType bgColor={randomColor}>
          <div></div>
          <div>{projectType}</div>
        </StyleProjectType>
      </StyleContents>
    </StyleContainer>
  );
}

export default ProjectItem;

const BoxMotion = {
  start: { scale: 0.9, y: -20, opacity: 0 },
  end: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const StyleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadow};

  margin: 0 auto;

  width: 20rem;
  height: 20rem;

  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

const StyleImg = styled.img`
  height: 19rem;
  width: 100%;

  border-radius: 20px 20px 0px 0px;
`;

const StyleContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 5rem;

  border-radius: 0px 0px 20px 20px;
  padding: 10px;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  background-color: ${(props) => (props.hoverd ? 'rgba(0,0,0,0.1)' : `${props.theme.boxBgColor}`)};
`;

const StyleTitle = styled.div`
  font-size: 19px;
  font-weight: 700;

  color: ${(props) => props.theme.textColor};
  opacity: 0.8;

  span {
    margin-right: 10px;

    &:first-child {
      width: 1rem;
    }
  }
`;

const StyleLanguageList = styled.ul`
  display: flex;
  font-size: 12px;

  span {
    margin-right: 10px;

    &:first-child {
      width: 1rem;
    }
  }
`;

const StyleLanguageLi = styled.li`
  padding: 2px;
  margin-right: 5px;

  border-radius: 3px;

  color: white;
  background-color: ${(props) => props.bgColor};
`;

const StyleProjectType = styled.div`
  margin-right: 5px;

  color: white;

  font-size: 13px;

  display: flex;

  div {
    &:first-child {
      width: 1rem;
      margin-right: 10px;
    }

    &:last-child {
      border-radius: 3px;
      padding: 2px;
      background-color: ${(props) => props.bgColor};
    }
  }
`;
