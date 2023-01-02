import { atom } from 'recoil';

export const openState = atom({
  key: 'openState',
  default: false,
});

export const projectContents = atom({
  key: 'projectContents',
  default: [
    {
      title: 'React-Ui-Storybook',
      images: ['images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png', 'images/다람쥐.png'],
      projectType: '개인프로젝트',
      description: [
        {
          title: 'Preview',
          contents: 'images/고래.png',
        },
        {
          title: 'About',
          contents:
            'HTML과 CSS에 대한 지식 습득 및 여러 사이트들을 클론코딩을 통해 직접 적용해보며 연습을 위한 개인프로젝트',
        },
        {
          title: '사용스택',
          contents: 'HTML, CSS',
        },
        {
          title: 'Preview',
          contents: 'images/고래.png',
        },
        {
          title: 'About',
          contents:
            'HTML과 CSS에 대한 지식 습득 및 여러 사이트들을 클론코딩을 통해 직접 적용해보며 연습을 위한 개인프로젝트',
        },
        {
          title: '사용스택',
          contents: 'HTML, CSS',
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
