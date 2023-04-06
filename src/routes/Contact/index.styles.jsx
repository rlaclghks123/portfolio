import styled from 'styled-components';

export const Box = styled.div`
  @media screen and (max-width: 700px) {
    height: 80%;
    input {
      &::placeholder {
        font-size: 10px;
      }
    }
  }
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  align-items: center;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  background: ${(props) => props.theme.boxBgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  input {
    outline: none;
  }
`;

export const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  display: flex;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      @media screen and (max-width: 700px) {
        padding: 0px;
      }
      cursor: pointer;
      width: 60%;
      display: flex;
      flex-direction: column;
      padding: 5%;

      label {
        color: ${(props) => props.theme.textColor};
        cursor: pointer;
        margin: 10px 0px 5px 0px;
        font-size: 13px;
        opacity: 0.5;
      }

      input {
        border: none;
        padding: 5px;
        background-color: inherit;
        border-bottom: 0.1px solid ${(props) => props.theme.textColor};

        &::placeholder {
          color: ${(props) => props.theme.textColor};
        }
      }
    }
  }
`;

export const RightBox = styled(Box)`
  label {
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    position: absolute;
    top: 10%;
    left: 10%;
    opacity: 0.4;
  }
`;

export const SendBtn = styled.input`
  @media screen and (max-width: 700px) {
    bottom: 5%;
    left: 30%;
    right: 30%;
  }
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 10%;
  right: 2.5vw;
  color: ${(props) => props.theme.textColor};
  border: 0.1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 1.5%;
  background-color: inherit;
`;

export const Message = styled.input`
  border-radius: 10px;
  border: 0.1px solid ${(props) => props.theme.textColor};
  width: 80%;
  height: 50%;
  background-color: inherit;
  padding: 10px;
`;
