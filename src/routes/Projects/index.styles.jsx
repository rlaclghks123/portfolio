import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../constants/sizeConstants';

export const ItemImg = styled(motion.img)`
  ${media.tablet`
  width: 300px;
  height: 90%;
  margin-right: 100px;
    `};

  width: 400px;
  height: 70vh;
`;

export const TitleImg = styled(ItemImg)`
  ${media.tablet`
  width: 80%;
  height: 80%;  
  margin:0 auto;
  `};

  width: 100%;
  border-radius: 10px;
`;

export const ProjectsBox = styled.div`
  ${media.tablet`font-size: 10px;`};
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
      ${media.desktop`font-size: 18px;
  `};
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
