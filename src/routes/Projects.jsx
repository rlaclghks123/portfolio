import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
  height: 100vh;
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.bgColor};
`;

function Projects() {
  return <Wrapper>hi</Wrapper>;
}
export default Projects;
