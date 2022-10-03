import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  width: 100%;
  height: 95vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const AboutContainer = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
`;

const AboutPictureBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.div`
  width: 80%;
  height: 80%;
  background-image: url("images/bgImg.JPG");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const AboutContentBox = styled.div`
  width: 50%;
`;

const AboutContentUl = styled.ul`
  display: flex;
  padding: 100px 50px;
  flex-direction: column;
  justify-content: center;
`;

const AboutContentli = styled.li`
  margin: 15px 0px;
  color: ${props => props.theme.textColor};

  overflow: hidden;
  div {
    margin: 8px 0px;
  }
`;

const Url = styled.a`
  font-size: 14px;
  box-sizing: border-box;

  &:visited {
    color: inherit;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutPictureBox>
          <Picture></Picture>
        </AboutPictureBox>
        <AboutContentBox>
          <AboutContentUl>
            <AboutContentli>
              <div>
                <span style={{ color: "red", fontWeight: "500" }}>
                  {" "}
                  좋아하는 일
                </span>
                을 열심히 하는 것은
                <span style={{ color: "red", fontWeight: "500" }}> 열정</span>
                이고,
              </div>
              <div>
                <span
                  style={{
                    opacity: 0.3,
                    textDecoration: "line-through",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  관심 없는 일
                </span>
                을 열심히 하는 것은 
                <span
                  style={{
                    opacity: 0.3,
                    textDecoration: "line-through",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  스트레스
                </span>
                라고 합니다.
              </div>
              <div>
                안녕하세요!
                <span
                  style={{
                    marginLeft: "5px",
                    fontWeight: "bold",
                    textDecoration: "underLine",
                  }}
                >
                  열정적인 개발자 김치환 입니다.
                </span>
              </div>
            </AboutContentli>
            <AboutContentli>
              <div>Email : rlaclghks123@naver.com</div>
              <div>Phone : 010-9321-5131</div>
            </AboutContentli>
            <AboutContentli>
              <div>
                GitHub :
                <Url target="_blank" href="https://github.com/rlaclghks123">
                  https://github.com/rlaclghks123
                </Url>
              </div>
              <div>
                Resume :
                <Url
                  target="_blank"
                  href="https://www.notion.so/fcfbdf6cb6ba4650b09a88ae837718da"
                >
                  https://www.notion.so/fcfbdf6cb6ba4650b09a88ae837718da
                </Url>
              </div>
              <div>
                지식정리 :
                <Url
                  target="_blank"
                  href="https://www.notion.so/f98c0e7528b64d03983b26660e49b646"
                >
                  https://www.notion.so/f98c0e7528b64d03983b26660e49b646
                </Url>
              </div>
            </AboutContentli>
            <AboutContentli></AboutContentli>
          </AboutContentUl>
        </AboutContentBox>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default About;
