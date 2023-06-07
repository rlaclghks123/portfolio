import { projectContents } from '../../atom';
import { useRecoilState } from 'recoil';
import { Link, useParams } from 'react-router-dom';
import Accordion from '../../components/accordion/Accordion.jsx';
import AccordionSummary from '../../components/accordion/AccordionSummary.jsx';
import AccordionDetails from '../../components/accordion/AccordionDetails.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  StyleContainer,
  StyleProjectsWrapper,
  StyleTitle,
  StyleProjectsMain,
  StyleIntroduceContainer,
  StyleProjectsMainTitle,
  StyleImg,
  StyleGitHub,
  StyleUl,
} from './index.styles';

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
                        {des.contents.map((content, i) => {
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
                        })}
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
