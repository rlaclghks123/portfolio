import styled from 'styled-components';
import Carousel from '../components/Carousel';
import DoubleBox from '../components/DoubleBox';
import { motion } from 'framer-motion';

const ItemImg = styled(motion.div)`
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgsrc }) => imgsrc});
  width: 55vh;
  height: 70vh;
`;

const List = styled.div`
  width: 60%;
  height: 90%;
  overflow: hidden;
  background-color: inherit;
  color: ${(props) => props.theme.textColor};
`;

const Title = styled.div`
  padding: 5%;
  border-bottom: 0.1px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const Ul = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Li = styled(motion.li)`
  padding: 0% 5% 10% 5%;
  margin: 10% 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 0.1px solid ${(props) => props.theme.textColor};

  &:hover {
    color: rgba(122, 122, 122, 0.5);
  }
`;

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

function Projects() {
  return (
    <DoubleBox>
      <Carousel>
        <ItemImg />
      </Carousel>

      <List>
        <Title>
          <span>PROJECTS</span>
          <span>Total {data.length}</span>
        </Title>
        <Ul>
          {data.map((item, index) => {
            return (
              <Li key={index} data-li-id={index}>
                <span>{item.title}</span>
                <span>{item.projectType}</span>
              </Li>
            );
          })}
        </Ul>
      </List>
    </DoubleBox>
  );
}
export default Projects;
