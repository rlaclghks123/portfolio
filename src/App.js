import { useState } from 'react';
import styled from 'styled-components';
import Cover from './components/Cover';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, DefaultTheme } from './styled.d';
import About from './routes/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './routes/Projects';
import NotFound from './routes/NotFound';
import { HOME_URL, PROJECTS_URL, PROJECT_URL, REST_URL } from './constants/urlConstants';
import ProjectIntroduce from './routes/ProjectIntroduce';

const BlackWhiteBtn = styled.div`
  border-radius: 20px;
  padding: 10px;
  position: fixed;
  z-index: 3;
  bottom: 30px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid black;
  cursor: pointer;

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
      <BrowserRouter basename="/portfolio">
        <Cover />
        <NavBar />
        <BlackWhiteBtn onClick={togleBtn}>다크 모드</BlackWhiteBtn>

        <Routes>
          <Route path={HOME_URL} element={<About />} />
          <Route path={PROJECTS_URL} element={<Projects />} />
          <Route path={PROJECT_URL} element={<ProjectIntroduce />} />
          <Route path={REST_URL} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
