import React from 'react';
import styled from 'styled-components';
import DoubleBox from '../components/DoubleBox';

const Picture = styled.div`
  width: 80%;
  height: 80%;
  background-image: url('images/bgImg.JPG');
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const AboutContents = styled.div`
  height: 85%;
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

const AboutContentsHeader = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  line-height: 25px;
  letter-spacing: 1px;
  p {
    &:last-child {
      font-weight: 900;
    }
  }
`;

const AboutContentsMain = styled.div`
  height: 20%;

  p {
    margin-bottom: 10px;
  }
`;

const AboutContentsFooter = styled.div`
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

const FooterColumn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1vh 0;
  div {
    width: 33%;
  }
`;

const Url = styled.a`
  margin-right: 50%;
  &:hover {
    opacity: 0.3;
  }
`;

function About() {
  return (
    <DoubleBox>
      <Picture />

      <AboutContents>
        <AboutContentsHeader>
          <p>
            기본을 건너뛰는 사람은 모래 위에 집을 짓는 사람과 같고, 기본을 지키는 사람은 튼튼한 기초
            위에 건물을 세운 사람과 같다고 합니다.
          </p>
          <br></br>
          <p> 안녕하세요. 어떤 태풍이 불어도 무너지지 않도록</p>
          <p>기본기를 탄탄하게 공부중인 김치환입니다.</p>
        </AboutContentsHeader>

        <AboutContentsMain>
          <p>Email : rlaclghks123@naver.com</p>
          <p>Phone : 010-9321-5131</p>
        </AboutContentsMain>

        <AboutContentsFooter>
          <FooterColumn>
            <div>GitHub</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <Url target="_blank" href="https://github.com/rlaclghks123">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </Url>
          </FooterColumn>

          <FooterColumn>
            <div>Resume</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <Url target="_blank" href="https://www.notion.so/fcfbdf6cb6ba4650b09a88ae837718da">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z" />
              </svg>
            </Url>
          </FooterColumn>

          <FooterColumn>
            <div>Blog</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
            <Url target="_blank" href="https://velog.io/@rlaclghks123">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
              </svg>
            </Url>
          </FooterColumn>
        </AboutContentsFooter>
      </AboutContents>
    </DoubleBox>
  );
}

export default About;
