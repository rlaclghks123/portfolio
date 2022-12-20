import { Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.bgColor};
  margin-top: 50px;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;

const Box = styled.div`
  width: 50%;
  margin: 8% 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled(Box)``;

const RightBox = styled(Box)``;

function DoubleBox({ children: childrenProp }) {
  const [leftBox, rightBox] = Children.toArray(childrenProp);

  return (
    <Wrapper>
      <Container>
        <LeftBox>{leftBox}</LeftBox>
        <RightBox>{rightBox}</RightBox>
      </Container>
    </Wrapper>
  );
}

export default DoubleBox;
