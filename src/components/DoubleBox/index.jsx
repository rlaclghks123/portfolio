import { Children } from 'react';
import {
  Wrapper,
  Container,
  LeftBox,
  RightBox,
  LeftBoxMotion,
  RightBoxMotion,
} from './index.styles';

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
