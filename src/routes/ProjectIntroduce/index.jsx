import styled from 'styled-components';
import { projectContents } from '../../atom';
import { useRecoilState } from 'recoil';
import { Link, useParams } from 'react-router-dom';
import Accordion from '../../components/accordion/Accordion.jsx';
import AccordionSummary from '../../components/accordion/AccordionSummary.jsx';
import AccordionDetails from '../../components/accordion/AccordionDetails.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function ProjectIntroduce() {
  const projects = useRecoilState(projectContents);
  const params = useParams();

  return (
    <StyleContainer>
      {projects[0].map((item) => {
        return (
          item.title === params['*'] && (
            <StyleProjectsWrapper>
              <StyleTitle>{item.title}</StyleTitle>
              <StyleProjectsMain>
                {item.description.map((des, i) => {
                  return (
                    <StyleIntroduceContainer>
                      <StyleProjectsMainTitle>{des.title}</StyleProjectsMainTitle>
                      {des.img && <StyleImg src={des.img} />}
                      {des.githubUrl && (
                        <StyleGitHub href={des.githubUrl}>Github 보러가기 &larr;</StyleGitHub>
                      )}
                      <StyleUl>
                        {des.contents.map(
                          (content, i) => {
                            return (
                              <>
                                {content.detail ? (
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
                                    >
                                      {content.title}
                                    </AccordionSummary>
                                    {<AccordionDetails>{content.detail}</AccordionDetails>}
                                  </Accordion>
                                ) : (
                                  <li>{content.title}</li>
                                )}
                              </>
                            );
                          }
                          // <li key={i}>{content.title}</li>

                          // <Accordion>
                          //   <AccordionSummary expandIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                          //     {content.title}
                          //   </AccordionSummary>
                          //   {<AccordionDetails>{content.detail}</AccordionDetails>}
                          // </Accordion>
                        )}
                      </StyleUl>
                      {des.url && <StyleGitHub href={des.url}> Visit</StyleGitHub>}
                    </StyleIntroduceContainer>
                  );
                })}
              </StyleProjectsMain>
            </StyleProjectsWrapper>
          )
        );
      })}
    </StyleContainer>
  );
}

export default ProjectIntroduce;

const StyleContainer = styled.div`
  width: 100%;
  min-height: 93vh;
  background: ${(props) => props.theme.bgColor};
`;

const StyleProjectsWrapper = styled.div`
  margin: 50px 20% 0px 20%;

  padding: 50px 0px;
`;

const StyleTitle = styled.div`
  color: ${(props) => props.theme.textColor};

  font-size: 24px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.navColor};
`;

const StyleProjectsMain = styled.div`
  margin-top: 20px;
`;

const StyleIntroduceContainer = styled.div`
  margin: 30px 0px;
  padding: 30px 0px;
  border-bottom: 0.1px solid ${(props) => props.theme.navColor};
  font-family: Arial, Helvetica, sans-serif;
`;

const StyleProjectsMainTitle = styled.div`
  font-size: 24px;
  font-weight: 900;

  color: ${(props) => props.theme.textColor};

  margin-bottom: 30px;
`;

const StyleImg = styled.img`
  width: 100%;
  height: 30rem;

  margin-bottom: 20px;
`;

const StyleGitHub = styled.a`
  color: ${(props) => props.theme.textColor};
  width: fit-content;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    border-radius: 5px;
    background-color: ${(props) => props.theme.navColor};
    color: ${(props) => props.theme.boxBgColor};
  }
`;

const StyleUl = styled.ul`
  margin: 20px 0px;
  color: ${(props) => props.theme.textColor};

  li {
    margin: 20px 0px;

    list-style-position: inside;
    list-style-type: square;
  }
`;
