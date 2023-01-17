import { Children } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgColor};
  margin-top: 50px;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 30px 0px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Box = styled(motion.div)`
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 47%;
  }
  width: 50%;
  height: 70%;
  margin: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftBox = styled(Box)``;

const RightBox = styled(Box)``;

const LeftBoxMotion = {
  start: { scale: 1, x: -200, opacity: 0 },
  end: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const RightBoxMotion = {
  start: { scale: 1, x: 200, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

function DoubleBox({ children: childrenProp }) {
  const [leftBox, rightBox] = Children.toArray(childrenProp);

  return (
    <Wrapper>
      <Container>
        <LeftBox variants={LeftBoxMotion} initial="start" animate="end">
          {leftBox}
        </LeftBox>
        <RightBox variants={RightBoxMotion} initial="start" animate="end">
          {rightBox}
        </RightBox>
      </Container>
    </Wrapper>
  );
}

export default DoubleBox;
