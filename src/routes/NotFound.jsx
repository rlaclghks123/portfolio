import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 50%;
  height: 30px;
  font-size: 25px;
  text-align: center;
`;

function NotFound() {
  return (
    <Box>
      <Content>잘못된 페이지 입니다. 상단의 메뉴로 통해 이동해주세요</Content>
    </Box>
  );
}

export default NotFound;
