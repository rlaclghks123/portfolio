import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  word-break: break-all;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const Img = styled.img`
  height: 400px;
`;

const AccordionDetails = ({ children, ...others }) => {
  return (
    <Container {...others}>
      {children.map((item, i) => {
        return (
          <div key={i}>
            <div>
              {item.text.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
              {item.img && <Img src={item.img}></Img>}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default AccordionDetails;
