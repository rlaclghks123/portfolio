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
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const MainContentsList = styled.div`
  margin-bottom: 7%;
`;

const MainContentsListTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 900;
`;

const MainContentsListContents = styled.div`
  font-size: 13px;
  letter-spacing: 0.4px;
  line-height: 23px;
`;

const BlankUrl = styled.div`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 50vh;
`;

const PreviewVideo = styled.video`
  width: 100%;
  height: 50vh;
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

const CONTENT_TYPE = {
  video: (src) => <PreviewVideo src={src} autoPlay />,
  img: (src) => <PreviewImg src={src} />,
  url: (src, content) => <BlankUrl onClick={() => window.open(src, '_blank')}>{content}</BlankUrl>,
  contents: (contents) => <span>{contents}</span>,
};

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
                <MainContentsList key={index}>
                  <MainContentsListTitle>{item.title}</MainContentsListTitle>
                  <MainContentsListContents>
                    {item.contents.video || item.contents.img ? (
                      item.contents.video ? (
                        CONTENT_TYPE.video(item.contents.video)
                      ) : (
                        CONTENT_TYPE.img(item.contents.img)
                      )
                    ) : (
                      <div style={{ width: '85%' }}>
                        {item.contents.url
                          ? CONTENT_TYPE.url(item.contents.url, `프로젝트 이동하기 <=`)
                          : CONTENT_TYPE.contents(item.contents)}
                      </div>
                    )}
                  </MainContentsListContents>
                </MainContentsList>
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
