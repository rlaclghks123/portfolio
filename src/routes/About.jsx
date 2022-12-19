import React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.bgColor};
`;

const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
`;

const PictureBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.div`
  width: 80%;
  height: 80%;
  background-image: url('images/bgImg.JPG');
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const ContentBox = styled.div`
  width: 50%;
`;

const ContentUl = styled.ul`
  height: 100%;
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Contentli = styled.li`
  color: ${(props) => props.theme.textColor};
  margin: 5% 0%;
  overflow: hidden;
`;

const P = styled.p`
  margin: 1vh 0px;
`;

const Url = styled.a`
  font-size: 14px;
  box-sizing: border-box;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;

  &:hover {
    opacity: 0.3;
  }
`;

function About() {
  return (
    <AnimatePresence>
      <Wrapper>
        <Container>
          <PictureBox>
            <Picture />
          </PictureBox>
          <ContentBox>
            <ContentUl>
              <Contentli>
                <P>
                  <span style={{ color: 'red', fontWeight: '700' }}> 좋아하는 일</span>을 열심히
                  하는 것은
                  <span style={{ color: 'red', fontWeight: '700' }}> 열정</span>
                  이고,
                </P>
                <P>
                  <span
                    style={{
                      opacity: 0.3,
                      textDecoration: 'line-through',
                      fontWeight: '500',
                    }}
                  >
                    관심 없는 일
                  </span>
                  을 열심히 하는 것은 
                  <span
                    style={{
                      opacity: 0.3,
                      textDecoration: 'line-through',
                      fontWeight: '500',
                    }}
                  >
                    스트레스
                  </span>
                  라고 합니다.
                </P>
                <P>
                  안녕하세요!
                  <span
                    style={{
                      marginLeft: '5px',
                      fontWeight: 'bold',
                      textDecoration: 'underLine',
                    }}
                  >
                    열정적인 개발자 김치환 입니다.
                  </span>
                </P>
              </Contentli>
              <Contentli>
                <P>Email : rlaclghks123@naver.com</P>
                <P>Phone : 010-9321-5131</P>
              </Contentli>
              <Contentli>
                <P>
                  <Url target="_blank" href="https://github.com/rlaclghks123">
                    GitHub &larr;
                  </Url>
                </P>
                <P>
                  <Url
                    target="_blank"
                    href="https://www.notion.so/fcfbdf6cb6ba4650b09a88ae837718da"
                  >
                    Resume &larr;
                  </Url>
                </P>
                <P>
                  <Url
                    target="_blank"
                    href="https://www.notion.so/f98c0e7528b64d03983b26660e49b646"
                  >
                    Blog &larr;
                  </Url>
                </P>
              </Contentli>
              <Contentli />
            </ContentUl>
          </ContentBox>
        </Container>
      </Wrapper>
    </AnimatePresence>
  );
}

export default About;
