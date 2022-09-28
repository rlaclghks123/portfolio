import React from "react";
import styled from "styled-components";
import Time from "../Cover/Time";
import { motion } from "framer-motion";

const IpadBox = styled.div`
  width: 450px;
  height: 550px;
  background-color: #13120f;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 3px 10px 10px 2px black;
  border: 0.1 solid black;
`;
const IPadCameraBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;

  div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: white;
  }
`;

const IpadContent = styled.div`
  width: 100%;
  height: 82%;
  border-radius: 3px;
  background-image: url("images/bgImg.JPG");
  background-position: center;
  background-size: cover;
`;

const IPadHomeBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;

  margin: 10px 0px;

  justify-content: center;
  align-items: center;
  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid white;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ScreenHeader = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #acb5c1;
  div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 7px;
    margin: 0px 3px;
  }
  svg {
    width: 10px;
    height: 10px;
  }
`;

const HeaderLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Icon = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    path {
      stroke: black;
      stroke-width: 2;
    }
  }
  div {
    margin-top: 3px;
    font-size: 12px;
  }
`;

const icon = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    rotateZ: 720,
    transition: { duration: 3, delay: 1 },
  },
};
function Ipad() {
  const Test = () => {
    console.log("123");
  };
  return (
    <IpadBox>
      <IPadCameraBox>
        <div></div>
      </IPadCameraBox>
      <IpadContent>
        <Screen>
          <ScreenHeader>
            <HeaderLeft>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </div>
              <div>파일</div>
              <div>편집</div>
              <div>보기</div>
              <div>이동</div>
              <div>윈도우</div>
              <div>도움말</div>
            </HeaderLeft>
            <HeaderRight>
              <div>
                <Time />
              </div>
            </HeaderRight>
          </ScreenHeader>
          <Icon variants={icon} initial="start" animate="end" onClick={Test}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <motion.path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z" />
            </svg>
            <motion.div>포트폴리오</motion.div>
          </Icon>
        </Screen>
      </IpadContent>
      <IPadHomeBox>
        <div></div>
      </IPadHomeBox>
    </IpadBox>
  );
}

export default Ipad;
