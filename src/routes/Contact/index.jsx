import DoubleBox from '../../components/DoubleBox';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { LeftBox, RightBox, SendBtn, Message } from './index.styles';

const InputState = [
  {
    labelHtmlFor: 'name',
    labelTitle: 'Name',
    inputId: 'name',
    inputType: 'text',
    inputName: 'from_name',
    inputPlaceholder: '이름을 입력해주세요.',
  },
  {
    labelHtmlFor: 'phone',
    labelTitle: 'Phone',
    inputId: 'phone',
    inputType: 'tel',
    inputName: 'phone',
    inputPlaceholder: '연락처를 입력해주세요.',
  },
  {
    labelHtmlFor: 'email',
    labelTitle: 'Email',
    inputId: 'email',
    inputType: 'email',
    inputName: 'email',
    inputPlaceholder: '메일 주소를 입력해주세요',
  },
];

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
            {InputState.map((item, i) => {
              return (
                <li key={i}>
                  <label htmlFor={item.labelHtmlFor}>{item.labelTitle}</label>
                  <input
                    id={item.inputId}
                    type={item.inputType}
                    name={item.inputName}
                    placeholder={item.inputPlaceholder}
                    required
                  />
                </li>
              );
            })}
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
