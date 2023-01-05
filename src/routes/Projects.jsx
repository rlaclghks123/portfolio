import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import DoubleBox from '../components/DoubleBox';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Aside from '../components/Aside';
import { useRecoilState } from 'recoil';
import { projectContents, projectDetailIdAtom } from '../atom';

const ItemImg = styled(motion.img)`
  width: 400px;
  height: 70vh;
`;

const TitleImg = styled(ItemImg)`
  border-radius: 10px;
  width: 70vh;
  height: 50vh;
`;

const ProjectsBox = styled.div`
  width: 60%;
  height: 80%;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
`;

const ProjectsListTitle = styled.div`
  padding: 5%;
  border-bottom: 0.1px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  span {
    &:first-child {
      font-size: 25px;
      font-weight: 900;
    }
  }
`;

const ProjectsList = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const ProjectName = styled(motion.li)`
  padding: 0% 5% 10% 5%;
  margin: 10% 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 0.1px solid ${(props) => props.theme.textColor};

  :hover {
    color: rgba(122, 122, 122, 0.5);
  }
`;

const Arrow = styled.span``;

const projectVar = {
  start: { opactiy: 0, y: -1000 },
  end: { opactiy: 1, x: 0, y: 0, transition: { duration: 1.5 } },
};

function Projects() {
  const [hoverPictureId, setHoverPictureId] = useState(-1);

  const [hoverArrow, setHoverArrow] = useState(-1);

  const [hoverData, setHoverData] = useState({});

  const [projectDetailId, setprojectDetailId] = useRecoilState(projectDetailIdAtom);

  const projects = useRecoilState(projectContents);

  const handleEnter = useCallback((e) => {
    setHoverPictureId(Number(e.target.closest('li').dataset.liId));

    setHoverData({
      start: {
        borderRadius: '10px',
        scale: 0.9,
      },
      end: { scale: 1, opactiy: 1, transition: { duration: 0.4 } },
      exit: { scale: 0 },
    });

    setHoverArrow(Number(e.target.closest('li').dataset.liId));
  }, []);

  const handleLeave = useCallback(() => {
    setHoverData({});
    setHoverArrow(-1);
  }, []);

  return (
    <>
      <DoubleBox>
        {hoverPictureId === -1 ? (
          <TitleImg src={['images/skills.jpg']} />
        ) : (
          <Carousel>
            {projects[0][hoverPictureId].images.map((imgsrc, i) => {
              return (
                <ItemImg
                  width="400px"
                  height="400px"
                  align="center"
                  src={imgsrc}
                  key={i}
                  initial={hoverData.start}
                  animate={hoverData.end}
                  exit={hoverData.exit}
                />
              );
            })}
          </Carousel>
        )}

        <ProjectsBox>
          <ProjectsListTitle onMouseEnter={() => setHoverPictureId(-1)} data-li-id={-1}>
            <span>PROJECTS</span>
            <span>Total {projects[0].length}</span>
          </ProjectsListTitle>

          <ProjectsList>
            {projects[0].map((item, index) => {
              return (
                <ProjectName
                  key={index}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onClick={() => {
                    setprojectDetailId(index);
                  }}
                  data-li-id={index}
                  variants={projectVar}
                  initial={'start'}
                  animate={'end'}
                >
                  {hoverArrow === index && (
                    <Arrow>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Arrow>
                  )}
                  <span>{item.title}</span>
                  <span>{item.projectType}</span>
                </ProjectName>
              );
            })}
          </ProjectsList>
        </ProjectsBox>
      </DoubleBox>
      {projectDetailId >= 0 && <Aside />}
    </>
  );
}
export default Projects;
