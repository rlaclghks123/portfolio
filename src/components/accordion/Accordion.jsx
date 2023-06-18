import { useState, useCallback, useEffect, useMemo, Children, useRef } from 'react';
import AccordionContext from './AccordionContext';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  overflow: hidden;
  height: 100%;
  margin: 5px 0px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ expanded }) => (expanded ? '0px 0px 5px rgba(0,0,0,0.2)' : '')};
  box-sizing: border-box;
  transition: box-shadow 0.5s ease-in-out;
  line-height: 30px;
`;

const AccordionDetailsWrapper = styled.div`
  max-height: ${({ expanded, childrenHeight }) => (expanded ? `${childrenHeight}px` : '0px')};
  transition: max-height 0.5s ease-in-out;
  height: 100%;
  width: 95%;
`;

const Accordion = ({
  children: childrenProp,
  defaultExpended = false,
  expanded: expandedProp,
  onChange,
  ...other
}) => {
  const [expanded, setExpandedState] = useState(defaultExpended);
  const [childrenHeight, setChildrenHeightState] = useState(0);
  const childrenRef = useRef(null);
  const [summary, ...children] = Children.toArray(childrenProp);

  const handleChange = useCallback(
    (event) => {
      setExpandedState(!expanded);
      if (onChange) {
        onChange(event, !expanded);
      }
    },
    [expanded, onChange, setExpandedState]
  );
  useEffect(() => {
    if (typeof expandedProp !== 'undefined') {
      setExpandedState(expandedProp);
    }
  }, [expandedProp]);

  useEffect(() => {
    setChildrenHeightState(childrenRef.current.clientHeight);
  }, [childrenRef]);

  const contextValue = useMemo(
    () => ({ expanded, toggle: handleChange }),
    [expanded, handleChange]
  );
  return (
    <AccordionContainer expanded={expanded} {...other}>
      <AccordionContext.Provider value={contextValue}>{summary}</AccordionContext.Provider>
      <AccordionDetailsWrapper expanded={expanded} childrenHeight={childrenHeight}>
        <div ref={childrenRef}>{children}</div>
      </AccordionDetailsWrapper>
    </AccordionContainer>
  );
};

export default Accordion;
