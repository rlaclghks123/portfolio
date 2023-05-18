import { Children } from 'react';
import { Wrapper, Container, LeftBoxMotion, RightBoxMotion, Box } from './index.styles';

function DoubleBox({ children: childrenProp }) {
  const [leftBox, rightBox] = Children.toArray(childrenProp);

  return (
    <Wrapper>
      <Container>
        <Box variants={LeftBoxMotion} initial="start" animate="end">
          {leftBox}
        </Box>

        <Box variants={RightBoxMotion} initial="start" animate="end">
          {rightBox}
        </Box>
      </Container>
    </Wrapper>
  );
}

export default DoubleBox;
