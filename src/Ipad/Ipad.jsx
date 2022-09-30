import React from "react";
import styled from "styled-components";
import Time from "../Cover/Time";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { openState } from "../atom";

const IpadBox = styled.div`
  margin-top: 4%;
  width: 30%;
  position: absolute;
  height: 85%;
  background-color: #13120f;
  border-radius: 25px;
  padding: 0px 30px;
  border: 2px solid #8e8f93;
  box-shadow: 3px 3px 3px 3px black;
  right: 13%;
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
  background-image: url("images/bgImg.JPG");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 3px solid #252525;
  border-radius: 5px;
`;

const IPadHomeBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin: 10px 0px;

  justify-content: center;
  align-items: center;
  div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0.1px solid white;
    opacity: 0.9;
    box-shadow: 1px 2px 2px 2px black;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const ScreenHeader = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  padding: 3px 0px;
  justify-content: space-between;
  align-items: center;
  background-color: #acb5c1;
  div {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 7px;
    font-weight: 500;
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

const AlertBox = styled(motion.div)`
  position: absolute;
  width: 45%;
  height: 6%;
  border-radius: 14px;
  background-color: #f5f5f7;
  padding: 10px;
  right: 10px;
  top: 7%;
  display: flex;
  align-items: center;
  box-shadow: 0.5px 0.5px 0.5px 0.5px black;
`;

const AlertIcon = styled.div`
  width: 18%;
  height: 100%;

  svg {
    width: 90%;
    height: 90%;
    stroke-width: 0.1px;
  }
`;

const AlertTitle = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
`;

const OpenBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 4px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  background-color: #e3e4e6;
  cursor: pointer;
`;

function Ipad() {
  const setOpen = useSetRecoilState(openState);
  const Test = () => {
    setOpen(prev => !prev);
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

          <AlertBox
            initial={{ x: 300 }}
            animate={{ x: 0, transition: { duration: 1, delay: 1 } }}
            whileHover={{
              scale: 1.5,
              translateX: -80,
              translateY: 20,
              transition: { duration: 0.7 },
            }}
            exit={{ translateX: 0 }}
            transition={{ duration: 0.7 }}
          >
            <AlertIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#34495e"
                  d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z"
                />
              </svg>
            </AlertIcon>
            <AlertTitle>포트폴리오</AlertTitle>
            <OpenBox onClick={Test}>Open</OpenBox>
          </AlertBox>
        </Screen>
      </IpadContent>
      <IPadHomeBox>
        <div></div>
      </IPadHomeBox>
    </IpadBox>
  );
}

export default Ipad;
