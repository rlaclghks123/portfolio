import React from "react";
import styled from "styled-components";
import Time from "../Cover/Time";

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

function Ipad() {
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
        </Screen>
      </IpadContent>
      <IPadHomeBox>
        <div></div>
      </IPadHomeBox>
    </IpadBox>
  );
}

export default Ipad;
