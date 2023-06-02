import { atom } from 'recoil';

export const projectContents = atom({
  key: 'projectContents',
  default: [
    {
      title: 'Review-cock',
      images: [
        'https://rlaclghks123.github.io/portfolio/images/review-cock/notLoginHome.jpg',
        'https://rlaclghks123.github.io/portfolio/images/review-cock/join.jpg',
        'https://rlaclghks123.github.io/portfolio/images/review-cock/loggedInHome.jpg',
        'https://rlaclghks123.github.io/portfolio/images/review-cock/login.jpg',
      ],

      projectType: '팀 프로젝트',
      languages: ['React', 'Recoil'],
      description: [
        {
          title: 'Introduce',
          img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/notLoginHome.jpg',
          githubUrl: 'https://github.com/Review-Cock/review-cock/tree/dev',
          contents: [{ title: '사장님이 상품 체험단을 모집하는 사이트 구현' }],
        },

        {
          title: '프로젝트 구현 기능',
          contents: [
            {
              title: '로그인, 회원가입 구현 및  유효성 검사 처리',
            },
            { title: 'Recoil을 사용하여 로그인 상태를 전역으로 관리' },
            { title: '쿠키를 사용하여 아이디 저장 기능 구현' },
            {
              title:
                'Access Token은 로컬, Refresh Token은 쿠키에 저장 하는 방식의 JWT를 사용하여 구현',
            },
            {
              title:
                '로그인시 보안 강화, 사용자의 경험을 개선하기 위해 OAuth를 통한 KaKao 로그인 기능 구현중…',
            },
          ],
        },
        {
          title: '프로젝트를 통해 배운점',
          contents: [
            {
              title: 'React-Hook-Form을 사용한 경우와 사용하지 않은 경우의 차이점',
              detail: [
                {
                  text: [
                    '상태 관리: React Hook Form은 상태 관리를 대신 처리합니다. 기존의 상태 관리 라이브러리인 useState나 useContext 등을 사용하여 개별적으로 상태를 관리하는 대신, React Hook Form에서 제공하는 useForm Hook을 사용하여 폼 상태를 관리합니다. 이로 인해 코드가 간결해지고, 상태 관리에 대한 부담이 줄어듭니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/notLoginHome.jpg',
                },
                {
                  text: [
                    '폼 유효성 검사: React Hook Form은 내장된 유효성 검사 기능을 제공합니다. 개발자는 간단한 스키마 기반의 규칙을 사용하여 필드 유효성을 정의할 수 있습니다. 이를 통해 사용자 입력의 유효성을 쉽게 검사하고, 에러 메시지를 처리할 수 있습니다.',
                  ],
                },
                {
                  text: [
                    '성능 최적화: React Hook Form은 성능 최적화를 고려하여 설계되었습니다. 사용자 입력이 변경될 때에만 필요한 부분만 다시 렌더링되도록 설계되어 있습니다. 이는 불필요한 리렌더링을 줄여 성능을 향상시킵니다.',
                  ],
                },
                {
                  text: [
                    '커스텀 입력 컴포넌트: React Hook Form은 커스텀 입력 컴포넌트를 쉽게 작성할 수 있는 방법을 제공합니다. 이를 통해 재사용 가능한 입력 컴포넌트를 만들고, 폼 로직을 분리하여 코드의 재사용성을 높일 수 있습니다.',
                  ],
                },
              ],
            },
            {
              title: '아이디 저장시 쿠키에 저장한 이유',
              detail: [
                {
                  text: [
                    '사용자 경험을 향상시키위해 브라우저에 저장하여 반복적인 로그인 작업을 줄여 시간과 노력을 절약해주기 위해 저장을 합니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/notLoginHome.jpg',
                },
                {
                  text: [
                    '쿠키에 저장하는 이유는 브라우저를 껏다 켜도 쿠키에 저장되어 있으며, 해커가 이메일만으로는 어떻게 할 수 없다고 생각하여, 보안에 큰 문제도 없기 때문에 쿠키에 저장을 했습니다.',
                  ],
                },
                {
                  text: [
                    '물론 보안적인 부분에서 email만으로 해커가 직접적으로 해킹을 할 수 있는것은 아닙니다. 하지만 이메일 주소를 통해 "피싱" 공격이 가능합니다. 피싱은 이메일을 통해 사용자들을 속여 개인 정보나 로그인 자격 증명을 요구하는 가짜 웹 사이트로 유도하는 공격입니다.',
                  ],
                },
                {
                  text: [
                    '따라서 삭제하는 코드가 없다면 영구적으로 저장되는 LocalStorage에 저장 하는것 보다 만료기간이 있는 쿠키에 저장 하는것이 더 좋다고 생각하여 쿠키에 저장했습니다',
                  ],
                },
              ],
            },
            { title: '회의를 통해 내린 결론을 문서화 하지 않은 경우 발생하는 문제점' },
            { title: 'Git Flow 방식을 사용하여 개발하면 좋은점' },
          ],
        },
        {
          title: '발생한 문제 및 해결',
          contents: [
            {
              title:
                '브라우저 창이 꺼지거나 페이지가 새로고침 되는 경우 Access Token이 사라져 에러 발생',
            },
          ],
        },
      ],
    },

    // {
    //   title: 'Bridge Game',
    //   images: [
    //     'https://rlaclghks123.github.io/portfolio/images/bridge_game/play.jpg',
    //     'https://rlaclghks123.github.io/portfolio/images/bridge_game/class.jpg',
    //     'https://rlaclghks123.github.io/portfolio/images/bridge_game/test.jpg',
    //   ],

    //   projectType: '개인프로젝트',
    //   languages: ['Vanilla Js', 'NodeJS'],
    //   githubUrl: 'https://github.com/rlaclghks123/javascript-bridge/tree/practiceAfterTest/docs',
    //   description: [
    //     {
    //       title: 'Preview',
    //       video: 'https://rlaclghks123.github.io/portfolio/images/bridge_game/testVideo.mp4',
    //       contents: [],
    //     },
    //     {
    //       title: '프로젝트를 진행하며 배운점',
    //       contents: [
    //         {
    //           title: `MVC 디자인패턴 사용하는 이유`,
    //         },
    //         { title: 'Clean Code를 작성하면 좋은점' },
    //         { title: '작성한 코드를 Test하는 방법' },
    //         { title: '유효성 검사를 어디서 처리를 하는것이 좋을까' },
    //       ],
    //       url: 'https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-Vanilla-JS-NodeJS%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-Bridge-Game-%EB%A7%8C%EB%93%A4%EA%B8%B0',
    //     },
    //     {
    //       title: '발생한 문제',
    //       contents: [
    //         { title: 'this값의 변경으로 인한 문제발생 ⇒ bind함수를 통해 this를 인자로 넘겨 해결' },
    //       ],
    //       url: 'https://velog.io/@rlaclghks123/%EC%82%BD%EC%A7%88%EB%B0%A9%EC%A7%80-%EB%B9%84%EB%8F%99%EA%B8%B0-this-bind',
    //     },
    //   ],
    // },

    {
      title: 'ToDo List',
      images: [
        'https://rlaclghks123.github.io/portfolio/images/todo_list_img/basic.jpg',
        'https://rlaclghks123.github.io/portfolio/images/todo_list_img/closeToDoList.jpg',
        'https://rlaclghks123.github.io/portfolio/images/todo_list_img/expandToDoList.jpg',
      ],
      projectType: '클론코딩',
      githubUrl: 'https://github.com/rlaclghks123/momentom-2021',
      languages: ['HTML', 'CSS', 'Vanilla Js'],
      description: [
        {
          title: 'Preview',
          img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/basic.jpg',
          url: 'https://rlaclghks123.github.io/momentom-2021/',
          contents: [],
        },

        {
          title: '프로젝트를 진행하며 배운점',
          contents: [
            { title: 'DOM에 대하여' },
            { title: 'WebStorage에 대하여' },
            { title: 'API, AJAX, JSON에 대하여' },
            { title: 'JavaScript Event에 대해' },
            { title: '하드코딩, 하드코딩을 피해야 하는 이유' },
          ],
          url: 'https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-Vanilla-Js%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-ToDoList-%EB%A7%8C%EB%93%A4%EA%B8%B0',
        },
        {
          title: '프로젝트 구현 기능',
          contents: [
            { title: 'LocalStorage를 활용하여 사용자 기억' },
            { title: 'Date 객체를 활용하여 시계 기능' },
            {
              title: 'Event, Dom API를 활용하여 ToDoList 추가 기능',
            },
            { title: '날씨 API를 활용하여 현재 위치 정보 및 날씨 정보 알림 기능' },
            { title: '메모장 확대, 축소, 창닫기 기능' },
          ],
        },
        {
          title: '발생한 문제 및 해결',
          contents: [
            {
              title:
                '하드코딩으로 인한 localStorage key 값이 다름으로 인해 저장 되지 않은 문제 발생',
              img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/problem1.jpg',
            },
            {
              title: 'filter 함수 사용시 비교하는 요소의 데이터 타입이 달라 작동하지 않은 문제',
              img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/problem2.jpg',
            },
          ],
        },
        {
          title: '클론코딩 후 스스로 개선점 및 추가기능',
          contents: [
            { title: '빈 값도 toDoList에 추가되는 문제를 개선 => trim 메서드를 활용하여 해결' },
            {
              title:
                '삭제 버튼 클릭시 바로 삭제 되는 부분 개선 ⇒ 사용자 입장에서 불편함을 느낄 수 있다고 생각하여 confirm 메소드 추가',
            },
            { title: 'Event에 친숙 해지기 위해 메모장 전체화면, 축소,  창닫기 3가지 기능 추가' },
          ],
        },
        {
          title: '회고',
          contents: [],
          url: 'https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-Vanilla-Js%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-ToDoList-%EB%A7%8C%EB%93%A4%EA%B8%B0',
        },
      ],
    },
  ],
});
