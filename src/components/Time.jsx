import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  position: absolute;
  right: 5%;
  align-items: center;
`;

const Box = styled.div`
  margin: 0px 2px;
`;

function Time() {
  const [timer, setTimer] = useState('00:00');
  const time = new Date();

  const currentTime = () => {
    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');

    setTimer(`${hour}:${minute}`);
  };

  const startTime = () => {
    setInterval(currentTime, 1000);
  };
  startTime();

  const getDateFn = () => {
    const toDay = time.getDay();
    switch (toDay) {
      case 0:
        return '일';
      case 1:
        return '월';
      case 2:
        return '화';
      case 3:
        return '수';
      case 4:
        return '목';
      case 5:
        return '금';
      case 6:
        return '토';

      default:
        return '일';
    }
  };

  return (
    <Wrapper>
      <Box>{`${new Date().getMonth() + 1}월`}</Box>
      <Box>{`${new Date().getDate()}일 (${getDateFn()})`}</Box>
      <Box>{timer}</Box>
    </Wrapper>
  );
}

export default Time;
