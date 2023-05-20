import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilState, useRecoilValue } from 'recoil';
import { projectContents, projectDetailIdAtom } from '../../atom';
import {
  Wrapper,
  modalVar,
  DarkBgColorAtModal,
  Box,
  Header,
  Main,
  MainContentsList,
  MainContentsListTitle,
  MainContentsListContents,
  BlankUrl,
  PreviewImg,
  PreviewVideo,
  Footer,
} from './index.styles';

const CONTENT_TYPE = {
  video: (src) => <PreviewVideo src={src} autoPlay />,
  img: (src) => <PreviewImg src={src} />,
  url: (src, contents) => (
    <BlankUrl onClick={() => window.open(src, '_blank')}>{contents}</BlankUrl>
  ),
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
                    {item.video && CONTENT_TYPE.video(item.video)}
                    {item.img && CONTENT_TYPE.img(item.img)}
                    <ul>
                      {item.contents.map((list, i) => {
                        return (
                          <li key={i}>
                            <span>{list.text}</span>
                            {list.img && <img src={list.img} alt="사진"></img>}
                          </li>
                        );
                      })}
                    </ul>
                    {item.url && CONTENT_TYPE.url(item.url, '보러가기 <')}
                  </MainContentsListContents>
                </MainContentsList>
              );
            })}
          </Main>

          <Footer onClick={() => window.open(projects[projectDetailId].githubUrl, '_blank')}>
            <div>GitHub로 이동하기</div>
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
