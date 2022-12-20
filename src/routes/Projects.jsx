import styled from 'styled-components';
import Carousel from '../components/Carousel';
import DoubleBox from '../components/DoubleBox';

const ItemImg = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 90vw;
  height: 35vw;
`;

function Projects() {
  return (
    <DoubleBox>
      <Carousel>
        {['images/고래.png', 'images/다람쥐.png', 'images/독수리.png', 'images/새.png'].map(
          (imgSrc, i) => {
            return <ItemImg imgSrc={imgSrc} key={i} />;
          }
        )}
      </Carousel>
      <div>2</div>
    </DoubleBox>
  );
}
export default Projects;
