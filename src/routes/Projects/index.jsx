import { useRecoilState } from 'recoil';
import { projectContents } from '../../atom';
import ProjectItem from '../../components/ProjectItem';
import { Link } from 'react-router-dom';
import {
  StyleContainer,
  StyleProjectsMain,
  StyleProjectsWrapper,
  StyleTitle,
} from './index.styles';

function Projects() {
  const projects = useRecoilState(projectContents);

  return (
    <StyleContainer>
      <StyleProjectsWrapper>
        <StyleTitle>Projects</StyleTitle>
        <StyleProjectsMain>
          {projects[0].map((item, i) => {
            return (
              <Link to={`/portfolio/projects/${item.title}`} key={`${item}-${i}`}>
                <ProjectItem
                  images={item.images}
                  title={item.title}
                  languageList={item.languages}
                  projectType={item.projectType}
                />
              </Link>
            );
          })}
        </StyleProjectsMain>
      </StyleProjectsWrapper>
    </StyleContainer>
  );
}
export default Projects;
