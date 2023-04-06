import styled from 'styled-components';

export const Picture = styled.div`
  @media screen and (max-width: 700px) {
    height: 50%;
  }
  width: 80%;
  height: 80%;
  background-image: url('https://rlaclghks123.github.io/portfolio/images/bgImg.JPG');
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

export const AboutContents = styled.div`
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 90%;
    font-size: 8px;
    margin-top: -100px;
    div {
      line-height: 13px;
    }
  }
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.boxBgColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  & > div {
    overflow: hidden;
    width: 100%;
  }
`;

export const AboutContentsHeader = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  line-height: 25px;
  letter-spacing: 1px;
  p {
    &:last-child {
      font-weight: 900;
      color: rgb(140, 122, 230);
    }
  }
`;

export const AboutContentsMain = styled.div`
  @media screen and (max-width: 700px) {
    height: 20%;
    margin-top: 10px;
  }
  height: 20%;

  p {
    margin-bottom: 10px;
  }
`;

export const AboutContentsFooter = styled.div`
  @media screen and (max-width: 700px) {
    margin-top: 10px;
    height: 30%;
  }
  height: 25%;
  svg {
    margin-left: 10px;
    width: 20px;
    height: 20px;

    path {
      fill: ${(props) => props.theme.textColor};
    }
  }
`;

export const FooterColumn = styled.div`
  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    height: 15px;
    margin: 3px 0px;

    svg {
      width: 10px;
      height: 10px;
    }
  }

  display: flex;
  justify-content: space-between;
  margin: 1vh 0;
  div {
    width: 33%;
  }
`;

export const Url = styled.a`
  margin-right: 50%;
  &:hover {
    opacity: 0.3;
  }
`;
