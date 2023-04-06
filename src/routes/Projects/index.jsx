import { useCallback, useState } from 'react';
import Carousel from '../../components/Carousel';
import DoubleBox from '../../components/DoubleBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Aside from '../../components/Aside';
import { useRecoilState } from 'recoil';
import { projectContents, projectDetailIdAtom } from '../../atom';
import {
  ItemImg,
  TitleImg,
  ProjectsBox,
  ProjectsListTitle,
  ProjectsList,
  ProjectName,
  Arrow,
  projectVar,
} from './index.styles';

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
          <TitleImg src={['https://rlaclghks123.github.io/portfolio/images/skills.jpg']} />
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
