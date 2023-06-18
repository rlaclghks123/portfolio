import { useState } from 'react';
import {
  StyleContainer,
  StyleImg,
  StyleContents,
  StyleTitle,
  StyleLanguageList,
  StyleLanguageLi,
  StyleProjectType,
} from './index.styles';

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
          <span>{title}</span>
        </StyleTitle>
        <StyleLanguageList>
          {languageList.map((item, i) => {
            return (
              <StyleLanguageLi key={i} bgColor={randomColor}>
                <span>{item}</span>
              </StyleLanguageLi>
            );
          })}
        </StyleLanguageList>
        <StyleProjectType bgColor={randomColor}>
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
