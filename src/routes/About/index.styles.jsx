import styled from 'styled-components';
import { media } from '../../constants/sizeConstants';

export const Picture = styled.div`
  ${media.tablet` height: 50%;`};
  width: 100%;
  height: 100%;
  background-image: url('https://rlaclghks123.github.io/portfolio/images/bgImg.JPG');
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

export const AboutRightBox = styled.div`
  ${media.tablet` 
  width: 100%;
  height: 100%;
  font-size: 8px;
  margin-top: -100px;
  padding: 10%;
  
  div {
    line-height: 15px;
  }
  
  `};

  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.boxBgColor};
  padding: 10%;
  box-sizing: border-box;
  border-radius: 20px;
  color: ${(props) => props.theme.textColor};

  section {
    &:first-child {
      height: 50%;
    }

    &:nth-child(2) {
      height: 20%;
    }

    &:last-child {
      height: 30%;
    }
  }
`;

export const AboutRightBoxHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.4rem;
  letter-spacing: 1px;
  box-sizing: border-box;

  p {
    &:last-child {
      font-weight: 900;
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const AboutRightBoxMain = styled.section`
  ${media.tablet`
  height: 20%;
  margin-top: 10px;  
  `};

  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 10px;
  }
`;

export const AboutRightBoxFooter = styled.section`
  ${media.tablet`
  margin-top: 10px;
  height: 30%;  
  `};

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
  ${media.tablet`
  display: flex;
  align-items: center;
  height: 15px;
  margin: 3px 0px;

  svg {
    width: 10px;
    height: 10px;
  }
  `};

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
