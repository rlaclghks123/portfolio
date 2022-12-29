import DoubleBox from '../components/DoubleBox';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { useRef } from 'react';

const Box = styled.div`
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

const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  display: flex;

  ul {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      cursor: pointer;
      width: 60%;
      display: flex;
      flex-direction: column;
      margin: 5% 0;

      label {
        color: ${(props) => props.theme.textColor};
        cursor: pointer;
        margin-bottom: 10px;
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

const RightBox = styled(Box)`
  label {
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    position: absolute;
    top: 10%;
    left: 10%;
    opacity: 0.4;
  }
`;

const SendBtn = styled.input`
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

const Message = styled.input`
  border-radius: 10px;
  border: 0.1px solid ${(props) => props.theme.textColor};
  width: 80%;
  height: 50%;
  background-color: inherit;
  padding: 10px;
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('rlaclghks123@google.com', 'template_ulold68', form.current, 'PEbUpyLAtUOMe_WD9')
      .then(
        (result) => {
          alert('메일이 정상적으로 보내졌습니다.');
          console.log(result);
        },
        (error) => {
          alert('메일을 정상적으로 보내는데 실패했습니다. ❌');
          console.log(error);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <DoubleBox>
        <LeftBox>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="이름을 입력해주세요."
                required
              />
            </li>
            <li>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="연락처를 입력해주세요."
                required
              />
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="메일 주소를 입력해주세요"
                required
              />
            </li>
          </ul>
        </LeftBox>
        <RightBox>
          <label htmlFor="message">Message</label>
          <Message name="message" id="message" required />
          <SendBtn type="submit" value="Send Message" />
        </RightBox>
      </DoubleBox>
    </form>
  );
}

export default Contact;
