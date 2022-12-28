import { useState } from 'react';
import styled from 'styled-components';
import Cover from './components/Cover';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, DefaultTheme } from './styled.d';
import About from './routes/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

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
    <ThemeProvider theme={BlackAndWhiteBtn ? DefaultTheme : DarkTheme}>
      <BrowserRouter>
        <Cover />
        <NavBar />
        <BlackWhiteBtn onClick={togleBtn} style={{ cursor: 'pointer' }}>
          다크 모드
        </BlackWhiteBtn>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
