import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 20px;
  word-break: break-all;
  overflow: auto;
`;

const Img = styled.img`
  height: 400px;
  width: 100%;
`;

const AccordionDetails = ({ children, ...others }) => {
  return (
    <Container {...others}>
      {children.map((item, i) => {
        return (
          <div key={i}>
            {i !== 0 && <hr></hr>}
            {item.text.map((item, i) => {
              return (
                <li key={i}>
                  {item.split('\n').map((line, j) => (
                    <span key={j}>
                      {line}
                      <br />
                    </span>
                  ))}
                </li>
              );
            })}
            {item.img && <Img src={item.img} alt="사진"></Img>}
          </div>
        );
      })}
    </Container>
  );
};

export default AccordionDetails;
