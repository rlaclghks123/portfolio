import { projectContents } from '../../atom';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
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
      {projects[0].map((item, projectIdx) => {
        return (
          item.title === params['*'] && (
            <StyleProjectsWrapper key={`projects-${projectIdx}`}>
              <StyleTitle>{item.title}</StyleTitle>
              <StyleProjectsMain>
                {item.description.map((des, desIdx) => {
                  return (
                    <StyleIntroduceContainer key={`description-${desIdx}`}>
                      <StyleProjectsMainTitle>{des.title}</StyleProjectsMainTitle>
                      {des.img && <StyleImg src={des.img} />}
                      {des.githubUrl && (
                        <StyleGitHub href={des.githubUrl}>Github 보러가기 &larr;</StyleGitHub>
                      )}
                      <StyleUl>
                        {des.contents.map((content, contentsIdx) => {
                          return (
                            <div key={`contents-${contentsIdx}`}>
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
                            </div>
                          );
                        })}
                      </StyleUl>
                      {des.url && <StyleGitHub href={des.url}> Visit &larr;</StyleGitHub>}
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
