import { Children } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.bgColor};
  margin-top: 50px;
  position: absolute;
  z-index: 2;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;

const Box = styled(motion.div)`
  width: 50%;
  margin: 8% 2%;
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
