import DoubleBox from '../../components/DoubleBox';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { LeftBox, RightBox, SendBtn, Message } from './index.styles';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('rlaclghks123@google.com', 'template_ulold68', form.current, 'PEbUpyLAtUOMe_WD9')
      .then(
        (result) => {
          alert('메일이 정상적으로 보내졌습니다.');
          window.location.reload();
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
