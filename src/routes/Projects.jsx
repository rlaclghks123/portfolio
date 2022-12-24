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

function Projects() {
  return (
    <DoubleBox>
      <Carousel>
        <ItemImg />
      </Carousel>
    </DoubleBox>
  );
}
export default Projects;
