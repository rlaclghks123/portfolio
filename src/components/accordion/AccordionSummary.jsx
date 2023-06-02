import { useContext } from 'react';
import styled from 'styled-components';
import AccordionContext from './AccordionContext';

const AccordionSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const AccordionSummaryContent = styled.div`
  margin: 12px 0;
  display: flex;
  flex-grow: 1;
`;

const ExpandedIconWrapper = styled.div`
  min-height: 30px;
  width: 30px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: rotate(${({ expanded }) => (expanded ? '180deg' : '0deg')});
`;

const AccordionSummary = ({ children, expandIcon, onClick, ...other }) => {
  const { toggle, expanded } = useContext(AccordionContext);
  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <AccordionSummaryContainer onClick={handleChange}>
      <AccordionSummaryContent {...other}>{children}</AccordionSummaryContent>
      <ExpandedIconWrapper expanded={expanded}>{expandIcon}</ExpandedIconWrapper>
    </AccordionSummaryContainer>
  );
};

export default AccordionSummary;
