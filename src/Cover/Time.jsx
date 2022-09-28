import React, { useState } from "react";
import styled from "styled-components";

const TimeBox = styled.div`
  font-size: 50px;
  margin: 30px 0px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

function Time() {
  const [timer, setTimer] = useState("00:00:00");

  const currentTime = () => {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");

    setTimer(`${hour}:${minute}:${second}`);
  };

  const startTime = () => {
    setInterval(currentTime, 1000);
  };
  startTime();

  const getDateFn = () => {
    const time = new Date();
    const toDay = time.getDay();

    switch (toDay) {
      case 1:
        return "월";

      case 2:
        return "화";
      case 3:
        return "수";

      case 4:
        return "목";
      case 5:
        return "금";

      case 6:
        return "토";
      case 7:
        return "일";

      default:
        return "요일";
    }
  };

  return (
    <TimeBox>
      <div>{`${new Date().getFullYear()}년`}</div>
      <div>{`${new Date().getMonth() + 1}월`}</div>
      <div>{`${new Date().getDate()}일 (${getDateFn()})`}</div>

      <div>{timer}</div>
    </TimeBox>
  );
}

export default Time;
