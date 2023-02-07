import { atom } from 'recoil';

export const openState = atom({
  key: 'openState',
  default: false,
});

export const projectContents = atom({
  key: 'projectContents',
  default: [
    {
      title: 'Ajax-test-project',
      images: [
        'images/ajax_project/home.jpg',
        'images/ajax_project/join.jpg',
        'images/ajax_project/login.jpg',
        'images/ajax_project/purchase.jpg',
        'images/ajax_project/kakaoMap.jpg',
      ],

      projectType: '개인프로젝트',
      githubUrl: 'https://github.com/rlaclghks123/ajax-test-project',
      description: [
        {
          title: 'Preview',
          contents: {
            video: 'images/ajax_project/preview.mov',
          },
        },
        {
          title: 'About',
          contents:
            'JavaScript를 공부하던 중 Ajax, API 사용 방법을 익히기 위해 연습하는 프로젝트입니다.',
        },
        {
          title: '배운점',
          contents:
            'Ajax의 3가지 방법(XML, fetch then, axios)을 통해 서버와 연결하는 법을 알게됐으며, 서버도 직접 구현해서 웹 시스템이 어떻게 돌아가는지 알게 되었습니다.',
        },

        {
          title: '사용스택',
          contents: 'Vanilla Js, React, styled-components, NodeJS',
        },
      ],
    },
    {
      title: 'React-Ui-StoryBook',
      images: [
        'images/react_storybook/tag.jpg',
        'images/react_storybook/tabBar.jpg',
        'images/react_storybook/button.jpg',
        'images/react_storybook/breadCrumb.jpg',
        'images/react_storybook/comment.jpg',
        'images/react_storybook/carousel.jpg',
        'images/react_storybook/bentoMenu.jpg',
      ],
      projectType: '팀프로젝트',
      githubUrl: 'https://github.com/rahee-k-it/react-ui-storybook',
      description: [
        {
          title: 'Preview',
          contents: {
            img: 'images/react_storybook/tag.jpg',
          },
        },
        {
          title: 'About',
          contents:
            'React와 StoryBook을 사용하여 32가지 UI Components를 협업을 통해 만들어본 프로젝트 입니다. ',
        },
        {
          title: '제가 맡은 부분',
          contents: 'TabBar, Comment, Carousel, BentoMenu, Tag, BreadCrumb, Button',
        },
        {
          title: '배운점',
          contents:
            'GitHub를 통한 협업하는 방법, GitFlow를 사용하여 좀 더 안전하게 개발할 수 있었던 점을 배웠습니다. 또한 코드리뷰를 통해 부족한점에 대해 많이 배울 수 있었습니다.',
        },
        {
          title: '아쉬운점',
          contents:
            '취업, 국비교육, 부트캠프 등 프로젝트 진행중에 같이 진행한 조원들이 일이 생겨 프로젝트를 잘 마무리를 짓지 못해서 많이 아쉬움이 남는것 같습니다.',
        },
        {
          title: '사용스택',
          contents: 'React, StoryBook, Styled-components, tailwindCSS',
        },
      ],
    },
    {
      title: 'Bridge Game',
      images: [
        'images/bridge_game/play.jpg',
        'images/bridge_game/class.jpg',
        'images/bridge_game/test.jpg',
      ],

      projectType: '개인프로젝트',
      githubUrl: 'https://github.com/rlaclghks123/javascript-bridge/tree/practiceAfterTest/docs',
      description: [
        {
          title: 'Preview',
          contents: {
            video: 'images/bridge_game/testVideo.mp4',
          },
        },
        {
          title: 'About',
          contents:
            'Vanilla Js를 사용해서 NodeJS의 콘솔창에서 입력을 받아, 출력을 나타내며, Class를 사용하여 모듈화를 했으며, 유지보수 및 가독성을 위해 MVC패턴을 적용했습니다. 또한  프로젝트의 안정감을 더할수 있도록 jest를 활용하여 코드를 Test 했습니다.',
        },

        {
          title: 'Clean Code',
          contents:
            'Clean Code를 위해 함수의 길이를 최대한 10줄 이내로 작성했고, 변수명, 함수명을 많은 고민을 통해 의미있고 이해하기 쉽도록 작명했으며, AirBnB 코딩컨벤션에 맞춰 코드를 작성했습니다.',
        },

        {
          title: '사용스택',
          contents: 'HTML, CSS, Vanilla Js, NodeJS',
        },
      ],
    },
    {
      title: 'ToDo List',
      images: [
        'images/todo_list_img/basic.jpg',
        'images/todo_list_img/closeToDoList.jpg',
        'images/todo_list_img/expandToDoList.jpg',
      ],
      projectType: '클론코딩',
      githubUrl: 'https://github.com/rlaclghks123/momentom-2021',
      description: [
        {
          title: 'Preview',
          contents: {
            img: 'images/todo_list_img/basic.jpg',
          },
        },
        {
          title: 'About',
          contents:
            'Vanilla Js를 사용해서 웹사이트를 클론코딩하며 Event, API, LocalStorage 등 VanillaJS에 대한 지식들을 습득하기 위해 진행한 프로젝트입니다.',
        },
        {
          title: '클론코딩과 별개로 스스로 기능 추가',
          contents:
            'ToDoList 삭제시 Confirm을 추가하여 조금 더 안전한 ToDoList 구현 및 ToDoList의 확대, 축소, 삭제 기능 추가',
        },
        {
          title: '배운점',
          contents:
            '날씨 API를 적용해보며 API 사용 방법, Date객체를 활용한 시계 구현 방법, LocalStorage를 통해 서버 없이 Data를 저장하는 방법을 배울 수 있었습니다.',
        },
        {
          title: '사용스택',
          contents: 'HTML, CSS, Vanilla Js',
        },
        {
          title: '프로젝트 URL',
          contents: {
            url: 'https://rlaclghks123.github.io/momentom-2021/',
          },
        },
      ],
    },

    {
      title: 'HTML & CSS',
      images: [
        'images/css_img/beige.jpg',
        'images/css_img/best_horror.jpg',
        'images/css_img/canalstreet.jpg',
        'images/css_img/donicaida.jpg',
        'images/css_img/paint_box.jpg',
        'images/css_img/rodicdavidson.jpg',
        'images/css_img/schwartzmedia.jpg',
        'images/css_img/ten_x_nineteen.jpg',
        'images/css_img/tolv.jpg',
        'images/css_img/wonhundred.jpg',
        'images/css_img/zoo.jpg',
      ],
      projectType: '클론코딩',
      githubUrl: 'https://github.com/rlaclghks123/Learn_About_CSS',
      description: [
        {
          title: 'Preview',
          contents: {
            img: 'images/css_img/tolv.jpg',
          },
        },
        {
          title: 'About',
          contents:
            'HTML과 CSS & SCSS에 대한 지식 습득 및 다양한 사이트들을 직접 클론코딩 해보며 진행한 개인프로젝트',
        },

        {
          title: '배운점',
          contents:
            'CSS의 Flex, Grid에 대해 이해하고, 실제로 적용해보며 CSS를 다루는데 있어서 많이 익숙해졌습니다.',
        },

        {
          title: '사용스택',
          contents: 'HTML, CSS & SASS',
        },
      ],
    },
  ],
});

export const projectDetailIdAtom = atom({
  key: 'projectDetailIdAtom',
  default: -1,
});
