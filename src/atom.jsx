import { atom } from 'recoil';

export const openState = atom({
  key: 'openState',
  default: false,
});

export const projectContents = atom({
  key: 'projectContents',
  default: [
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
          contents: ['React, styled-components, Framer-Motion'],
        },
        {
          title: 'About',
          contents: [
            '현재까지 제가 진행했던 프로젝트에 대해 설명하기 위해 만든 포트폴리오 입니다.',
          ],
        },
        {
          title: '배운점',
          contents: [
            '클린코드와 재사용 가능한 부분에 대해서 많이 고민하고, 스스로 코드를 작성 해보면서 최대한 보기좋고, 유지보수 하기 좋게 만들어볼려고 노력했던 부분에 대해서 많이 배웠습니다.',
          ],
        },
        {
          title: '아쉬운점',
          contents: [
            '처음부터 끝까지 저 혼자서 만든 디자인, 코드이기 때문에 어떤 문제가 있는지 잘 모르는 부분이 제일 아쉬운 것 같습니다.',
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
          contents: ['HTML, Vanilla Js, NodeJS'],
        },
        {
          title: '프로젝트를 진행하며 배운점',
          contents: [
            'Node JS에 대하여',
            'Class와 모듈화',
            'MVC 디자인패턴',
            'Clean Code를 중시하며 AirBnB 코딩 컨벤션에 의거하여 코드 작성',
            'Jest를 활용해 코드 Test하는 방법 숙지',
          ],
        },
        {
          title: '발생한 문제 및 어려웠던 점',
          contents: [
            'this값의 변경으로 인한 문제발생 ⇒ bind함수를 통해 this를 인자로 넘겨 해결',
            '요구사항에 맞춰 작성한 로직을 어떻게 MVC 디자인 패턴으로 나눠야 하는지',
          ],
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
          contents: ['HTML, CSS, Vanilla Js'],
        },

        {
          title: '프로젝트를 진행하며 배운점',
          contents: [
            'DOM에 대하여',
            'webStorage에 대하여',
            'API, AJAX, JSON에 대하여',
            'JavaScript Event에 대해',
            '하드코딩, 하드코딩을 피해야 하는 이유',
          ],
        },
        {
          title: '프로젝트 구현 기능',
          contents: [
            'LocalStorage를 활용하여 사용자 기억',
            'Date 객체를 활용하여 시계 기능',
            '배열과 Math.Random 메소드를 활용하여 Random Quote, Random Background Image 기능',
            'Event, Dom API를 활용하여 ToDoList 기능',
            '날씨 API를 활용하여 현재 위치 정보 및 날씨 정보 알림 기능',
            '메모장 확대, 축소, 창닫기 기능',
          ],
        },
        {
          title: '발생한 문제 및 해결',
          contents: [
            '하드코딩으로 인한 localStorage key 값이 다름으로 인해 저장 되지 않은 문제 ⇒ 상수화 시킴으로서 방지',
            'filter 함수 사용시 비교하는 요소의 데이터 타입이 달라 작동하지 않은 문제 ⇒ 두개의 데이터 타입을 맞춰 문제 해결',
          ],
        },
        {
          title: '클론코딩 후 스스로 개선점 및 추가기능',
          contents: [
            '빈 값도 toDoList에 추가되는 문제를 개선',
            '삭제 버튼 클릭시 바로 삭제 되는 부분 개선 ⇒ 사용자 입장에서 불편함을 느낄 수 있다고 생각하여 confirm 메소드 추가',
            'Event에 친숙 해지기 위해 메모장 전체화면, 축소,  창닫기 3가지 기능 추가',
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
