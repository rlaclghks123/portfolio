import { atom } from 'recoil';

export const openState = atom({
  key: 'openState',
  default: false,
});

export const projectContents = atom({
  key: 'projectContents',
  default: [
    {
      title: 'Review-cock',
      images: [
        'https://rlaclghks123.github.io/portfolio/images/review-cock/join.jpg',
        'https://rlaclghks123.github.io/portfolio/images/review-cock/loggedInHome.jpg',
        'https://rlaclghks123.github.io/portfolio/images/review-cock/login.jpg',
        'https://rlaclghks123.github.io/portfolio/images/review-cock/notLoginHome.jpg',
      ],

      projectType: '팀 프로젝트',
      githubUrl: 'https://github.com/Review-Cock/review-cock',
      description: [
        {
          title: 'Preview',
          img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/join.jpg',
          contents: [],
        },
        {
          title: '사용스택',
          contents: [{ text: 'React, Recoil' }],
        },
        {
          title: '프로젝트 구현 기능',
          contents: [
            { text: '로그인, 회원가입 구현 및  유효성 검사 처리' },
            { text: 'Recoil을 사용하여 로그인 상태를 전역으로 관리' },
            { text: '쿠키를 사용하여 아이디 저장 기능 구현' },
            {
              text: 'Access Token은 로컬, Refresh Token은 쿠키에 저장 하는 방식의 JWT를 사용하여 구현중…',
            },
            {
              text: '로그인시 보안 강화, 사용자의 경험을 개선하기 위해 OAuth를 통한 Naver, KaKao 로그인 기능 구현중…',
            },
          ],
        },
        {
          title: '프로젝트를 통해 배운점',
          contents: [
            { text: 'React-Hook-Form을 사용한 경우와 사용하지 않은 경우의 차이점' },
            { text: '아이디 저장시 쿠키에 저장한 이유' },
            { text: '회의를 통해 내린 결론을 문서화 하지 않은 경우 발생하는 문제점' },
            { text: 'Git Flow 방식을 사용하여 개발하면 좋은점' },
          ],
        },
        {
          title: '발생한 문제 및 해결',
          contents: [
            {
              text: '브라우저 창이 꺼지거나 페이지가 새로고침 되는 경우 Access Token이 사라져 에러가 발생',
            },
          ],
        },
      ],
    },

    {
      title: 'Portfolio',
      images: [
        'https://rlaclghks123.github.io/portfolio/images/portfolio/about.jpg',
        'https://rlaclghks123.github.io/portfolio/images/portfolio/project.jpg',
        'https://rlaclghks123.github.io/portfolio/images/portfolio/contact.jpg',
        'https://rlaclghks123.github.io/portfolio/images/portfolio/darkmode.jpg',
      ],

      projectType: '개인프로젝트',
      githubUrl: 'https://github.com/rlaclghks123/portfolio',
      description: [
        {
          title: 'Preview',
          video: 'https://rlaclghks123.github.io/portfolio/images/portfolio/preview.mov',
          contents: [],
        },
        {
          title: '사용스택',
          contents: [{ text: 'React, styled-components, Framer-Motion' }],
        },
        {
          title: 'About',
          contents: [
            {
              text: '현재까지 제가 진행했던 프로젝트에 대해 설명하기 위해 만든 포트폴리오 입니다.',
            },
          ],
        },
        {
          title: '배운점',
          contents: [
            {
              text: '클린코드와 재사용 가능한 부분에 대해서 많이 고민하고, 스스로 코드를 작성 해보면서 최대한 보기좋고, 유지보수 하기 좋게 만들어볼려고 노력했던 부분에 대해서 많이 배웠습니다.',
            },
          ],
        },
        {
          title: '아쉬운점',
          contents: [
            {
              text: '처음부터 끝까지 저 혼자서 만든 디자인, 코드이기 때문에 어떤 문제가 있는지 잘 모르는 부분이 제일 아쉬운 것 같습니다.',
            },
          ],
        },
        {
          title: '프로젝트 URL',
          contents: [],
          url: 'https://rlaclghks123.github.io/portfolio/',
        },
      ],
    },

    {
      title: 'Bridge Game',
      images: [
        'https://rlaclghks123.github.io/portfolio/images/bridge_game/play.jpg',
        'https://rlaclghks123.github.io/portfolio/images/bridge_game/class.jpg',
        'https://rlaclghks123.github.io/portfolio/images/bridge_game/test.jpg',
      ],

      projectType: '개인프로젝트',
      githubUrl: 'https://github.com/rlaclghks123/javascript-bridge/tree/practiceAfterTest/docs',
      description: [
        {
          title: 'Preview',
          video: 'https://rlaclghks123.github.io/portfolio/images/bridge_game/testVideo.mp4',
          contents: [],
        },
        {
          title: '사용스택',
          contents: [{ text: 'Vanilla Js, NodeJS' }],
        },
        {
          title: '프로젝트를 진행하며 배운점',
          contents: [
            {
              text: `MVC 디자인패턴 사용하는 이유`,
            },
            { text: 'Clean Code를 작성하면 좋은점' },
            { text: '작성한 코드를 Test하는 방법' },
            { text: '유효성 검사를 어디서 처리를 하는것이 좋을까' },
          ],
        },
        {
          title: '발생한 문제',
          contents: [
            { text: 'this값의 변경으로 인한 문제발생 ⇒ bind함수를 통해 this를 인자로 넘겨 해결' },
          ],
          url: 'https://velog.io/@rlaclghks123/%EC%82%BD%EC%A7%88%EB%B0%A9%EC%A7%80-%EB%B9%84%EB%8F%99%EA%B8%B0-this-bind',
        },
      ],
    },

    {
      title: 'ToDo List',
      images: [
        'https://rlaclghks123.github.io/portfolio/images/todo_list_img/basic.jpg',
        'https://rlaclghks123.github.io/portfolio/images/todo_list_img/closeToDoList.jpg',
        'https://rlaclghks123.github.io/portfolio/images/todo_list_img/expandToDoList.jpg',
      ],
      projectType: '클론코딩',
      githubUrl: 'https://github.com/rlaclghks123/momentom-2021',
      description: [
        {
          title: 'Preview',
          img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/basic.jpg',
          contents: [],
        },
        {
          title: '사용스택',
          contents: [{ text: 'HTML, CSS, Vanilla Js' }],
        },

        {
          title: '프로젝트를 진행하며 배운점',
          contents: [
            { text: 'DOM에 대하여' },
            { text: 'WebStorage에 대하여' },
            { text: 'API, AJAX, JSON에 대하여' },
            { text: 'JavaScript Event에 대해' },
            { text: '하드코딩, 하드코딩을 피해야 하는 이유' },
          ],
          url: 'https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-Vanilla-Js%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-ToDoList-%EB%A7%8C%EB%93%A4%EA%B8%B0',
        },
        {
          title: '프로젝트 구현 기능',
          contents: [
            { text: 'LocalStorage를 활용하여 사용자 기억' },
            { text: 'Date 객체를 활용하여 시계 기능' },
            {
              text: 'Event, Dom API를 활용하여 ToDoList 추가 기능',
            },
            { text: '날씨 API를 활용하여 현재 위치 정보 및 날씨 정보 알림 기능' },
            { text: '메모장 확대, 축소, 창닫기 기능' },
          ],
        },
        {
          title: '발생한 문제 및 해결',
          contents: [
            {
              text: '하드코딩으로 인한 localStorage key 값이 다름으로 인해 저장 되지 않은 문제 발생',
              img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/problem1.jpg',
            },
            {
              text: 'filter 함수 사용시 비교하는 요소의 데이터 타입이 달라 작동하지 않은 문제',
              img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/problem2.jpg',
            },
          ],
        },
        {
          title: '클론코딩 후 스스로 개선점 및 추가기능',
          contents: [
            { text: '빈 값도 toDoList에 추가되는 문제를 개선 => trim 메서드를 활용하여 해결' },
            {
              text: '삭제 버튼 클릭시 바로 삭제 되는 부분 개선 ⇒ 사용자 입장에서 불편함을 느낄 수 있다고 생각하여 confirm 메소드 추가',
            },
            { text: 'Event에 친숙 해지기 위해 메모장 전체화면, 축소,  창닫기 3가지 기능 추가' },
          ],
        },
        {
          title: '회고',
          contents: [],
          url: 'https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-Vanilla-Js%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-ToDoList-%EB%A7%8C%EB%93%A4%EA%B8%B0',
        },

        {
          title: '프로젝트 URL',
          contents: [],
          url: 'https://rlaclghks123.github.io/momentom-2021/',
        },
      ],
    },
  ],
});

export const projectDetailIdAtom = atom({
  key: 'projectDetailIdAtom',
  default: -1,
});
