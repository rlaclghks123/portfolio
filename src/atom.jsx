import { atom } from 'recoil';

export const openState = atom({
  key: 'openState',
  default: false,
});

export const projectContents = atom({
  key: 'projectContents',
  default: [
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
            'Vanilla Js를 사용해서 웹사이트를 클론코딩하며 Event, API, LocalStorage 등 다양한 지식들을 습득하기 위한 프로젝트이며,',
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
