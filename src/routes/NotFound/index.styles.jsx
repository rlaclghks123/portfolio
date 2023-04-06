import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
  width: 50%;
  height: 30px;
  font-size: 25px;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;
