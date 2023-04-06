import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ItemImg = styled(motion.img)`
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 90%;
  }
  width: 400px;
  height: 70vh;
`;

export const TitleImg = styled(ItemImg)`
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 80%;
  }
  border-radius: 10px;
  width: 70vh;
  height: 50vh;
`;

export const ProjectsBox = styled.div`
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
  width: 60%;
  height: 80%;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
`;

export const ProjectsListTitle = styled.div`
  padding: 5%;
  border-bottom: 0.1px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    &:first-child {
      @media screen and (max-width: 700px) {
        font-size: 18px;
      }
      font-size: 25px;
      font-weight: 900;
    }
  }
`;

export const ProjectsList = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const ProjectName = styled(motion.li)`
  padding: 0% 5% 10% 5%;
  margin: 10% 0px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 0.1px solid ${(props) => props.theme.textColor};

  :hover {
    color: rgba(122, 122, 122, 0.5);
  }
`;

export const Arrow = styled.span``;

export const projectVar = {
  start: { opactiy: 0, y: -1000 },
  end: { opactiy: 1, x: 0, y: 0, transition: { duration: 1.5 } },
};
