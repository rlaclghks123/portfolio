import styled from 'styled-components';

export const StyleContainer = styled.div`
  width: 100%;
  min-height: 93vh;
  background: ${(props) => props.theme.bgColor};
`;

export const StyleProjectsWrapper = styled.div`
  margin: 50px 20% 0px 20%;

  padding: 50px 0px;
`;

export const StyleTitle = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const StyleProjectsMain = styled.div`
  border-top: 1px solid ${(props) => props.theme.textColor};

  margin-top: 20px;
  padding: 50px 0px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
`;
