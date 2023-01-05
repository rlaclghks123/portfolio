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
          contents: 'images/todo_list_img/basic.jpg',
        },
        {
          title: 'About',
          contents:
            'Vanilla Js를 사용해서 웹사이트를 클론코딩하며 Event, API, LocalStorage 등 다양한 지식들을 습득하기 위한 프로젝트이며, 단순히 클론 코딩에서 멈추지 않고 toDo List를 닫기, 열기, 확대, 축소 기능을 추가',
        },
        {
          title: '사용스택',
          contents: 'HTML, CSS, Vanill Js',
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
          contents: 'images/css_img/tolv.jpg',
        },
        {
          title: 'About',
          contents:
            'HTML과 CSS & SCSS에 대한 지식 습득 및 다양한 사이트들을 직접 클론코딩 해보며 진행한 개인프로젝트',
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
