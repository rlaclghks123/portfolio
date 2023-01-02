import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { projectContents, projectDetailIdAtom } from '../atom';

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40%;
  height: 100%;
  z-index: 31;
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.textColor};
`;

const modalVar = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const DarkBgColorAtModal = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.65);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 7% 10%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  margin-bottom: 5%;
  padding-right: 5%;
  box-sizing: border-box;

  svg {
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  height: 75%;
  overflow: scroll;
  margin: 3% 0;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const MainContentsBox = styled.div`
  margin-bottom: 7%;
`;

const MainContentsBoxTitle = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const MainContentsBoxContent = styled.div`
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 23px;
`;

const Preview = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgsrc }) => imgsrc});
  width: 100%;
  height: 40vh;
`;

const Footer = styled.div`
  width: 100%;
  padding: 2%;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.textColor};

  :hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.boxBgColor};
  }
`;

function Aside() {
  const [projectDetailId, setProjectDetailId] = useRecoilState(projectDetailIdAtom);
  const projects = useRecoilValue(projectContents);

  return (
    <>
      <Wrapper variants={modalVar} initial="hidden" animate="visible">
        <Box>
          <Header>
            <FontAwesomeIcon onClick={() => setProjectDetailId(-1)} icon={faArrowLeft} />
            <div>{projects[projectDetailId].title}</div>
          </Header>

          <Main>
            {projects[projectDetailId].description.map((item, index) => {
              return (
                <MainContentsBox key={index}>
                  <MainContentsBoxTitle>{item.title}</MainContentsBoxTitle>
                  <MainContentsBoxContent>
                    {item.title === 'Preview' ? (
                      <Preview imgsrc={item.contents}></Preview>
                    ) : (
                      <p>{item.contents}</p>
                    )}
                  </MainContentsBoxContent>
                </MainContentsBox>
              );
            })}
          </Main>

          <Footer>
            <div onClick={() => window.open(projects[projectDetailId].githubUrl, '_blank')}>
              GitHub로 이동하기
            </div>
          </Footer>
        </Box>
      </Wrapper>
      {projectDetailId !== -1 && (
        <DarkBgColorAtModal
          onClick={() => {
            setProjectDetailId(-1);
          }}
        ></DarkBgColorAtModal>
      )}
    </>
  );
}

export default Aside;
