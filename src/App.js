import { useState } from 'react';
import styled from 'styled-components';
import Cover from './cover/Cover';
import PortFolio from './portFolio/PortFolio';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, DefaultTheme } from './styled.d';

const BlackWhiteBtn = styled.div`
  border-radius: 20px;
  padding: 10px;
  position: fixed;
  z-index: 99;
  bottom: 30px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid black;
  &:hover {
    background-color: ${(props) => props.theme.navColor};
    color: ${(props) => props.theme.navBgColor};
  }
`;

function App() {
  const [BlackAndWhiteBtn, setBlackAndWhiteBtn] = useState(true);
  const togleBtn = () => {
    setBlackAndWhiteBtn((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={BlackAndWhiteBtn ? DefaultTheme : DarkTheme}>
        <Cover />
        <PortFolio />
        <BlackWhiteBtn onClick={togleBtn} style={{ cursor: 'pointer' }}>
          다크 모드
        </BlackWhiteBtn>
      </ThemeProvider>
    </>
  );
}

export default App;
