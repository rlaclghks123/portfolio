import styled from 'styled-components';

export const StyleContainer = styled.div`
  width: 100%;
  min-height: 93vh;
  background: ${(props) => props.theme.bgColor};
  font-family: 'NanumSquare', '맑은 고딕', sans-serif;
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

  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.navColor};
`;

export const StyleProjectsMain = styled.div`
  margin-top: 20px;
`;

export const StyleIntroduceContainer = styled.div`
  margin: 30px 0px;
  padding: 30px 0px;

  border-bottom: 0.1px solid ${(props) => props.theme.navColor};

  font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const StyleProjectsMainTitle = styled.div`
  font-size: 24px;
  font-weight: 900;

  color: ${(props) => props.theme.textColor};

  margin-bottom: 30px;
`;

export const StyleImg = styled.img`
  width: 100%;
  height: 30rem;

  margin-bottom: 20px;
`;

export const StyleGitHub = styled.a`
  color: ${(props) => props.theme.textColor};
  width: fit-content;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    border-radius: 5px;
    background-color: ${(props) => props.theme.navColor};
    color: ${(props) => props.theme.boxBgColor};
  }
`;

export const StyleUl = styled.ul`
  margin: 20px 0px;
  color: ${(props) => props.theme.textColor};

  li {
    margin: 20px 0px;

    list-style-position: inside;
    list-style-type: square;
    line-height: 30px;
  }
`;
