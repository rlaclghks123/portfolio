import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import DoubleBox from '../components/DoubleBox';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ItemImg = styled(motion.div)`
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgsrc }) => imgsrc});
  width: 55vh;
  height: 70vh;
`;

const TitleImg = styled(ItemImg)`
  border-radius: 10px;
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

const data = [
  {
    title: 'React-Ui-Storybook',
    images: ['images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png'],
    projectType: '개인프로젝트',
  },

  {
    title: 'Learn-About-Css',
    images: ['images/고래.png', 'images/고래.png', 'images/고래.png', 'images/고래.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'A',
    images: ['images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'B',
    images: ['images/새.png', 'images/새.png', 'images/새.png', 'images/새.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'C',
    images: ['images/고래.png', 'images/고래.png', 'images/고래.png', 'images/고래.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'D',
    images: ['images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'A',
    images: ['images/새.png', 'images/새.png', 'images/새.png', 'images/새.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'B',
    images: ['images/고래.png', 'images/고래.png', 'images/고래.png', 'images/고래.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'C',
    images: ['images/여우.png', 'images/여우.png', 'images/여우.png', 'images/여우.png'],
    projectType: '개인프로젝트',
  },
  {
    title: 'D',
    images: ['images/고래.png', 'images/고래.png', 'images/고래.png', 'images/고래.png'],
    projectType: '개인프로젝트',
  },
];

const ArrowAnimation = {
  start: { opactiy: 0 },
  end: { opactiy: 1, color: 'black', transition: { delay: 3.5, duration: 1 } },
  exit: { opactiy: 0 },
};

function Projects() {
  const [hoverPictureId, setHoverPictureId] = useState(-1);

  const [hoverArrow, setHoverArrow] = useState(-1);

  const [hoverData, setHoverData] = useState({});

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
    <DoubleBox>
      {hoverPictureId === -1 ? (
        <TitleImg imgsrc={['images/새.png']} />
      ) : (
        <Carousel>
          {data[hoverPictureId].images.map((imgsrc, i) => {
            return (
              <ItemImg
                imgsrc={imgsrc}
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
          <span>Total {data.length}</span>
        </ProjectsListTitle>

        <ProjectsList>
          {data.map((item, index) => {
            return (
              <ProjectName
                key={index}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                data-li-id={index}
              >
                {hoverArrow === index && (
                  <Arrow
                    initial={ArrowAnimation.start}
                    animate={ArrowAnimation.end}
                    exit={ArrowAnimation.exit}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />{' '}
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
  );
}
export default Projects;
