import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
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

function NotFound() {
  return (
    <Box>
      <Content>
        <p>잘못된 페이지 입니다.</p> <p>상단의 메뉴로 통해 이동해주세요</p>
      </Content>
    </Box>
  );
}

export default NotFound;
