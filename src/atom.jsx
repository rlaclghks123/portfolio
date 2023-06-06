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
                    '성능 최적화: React Hook Form은 input값이 변해도 리랜더링이 발생하지 않습니다. React-Hook-Form 사용시 불필요한 리렌더링을 줄여 성능을 향상시킵니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/reactHookFormDiff.jpg',
                },
                {
                  text: [
                    `상태 관리,유효성 검사,에러처리
                    기존의 Form 방식은 상태관리, 유효성 검사, 에러처리를 직접 작성해야 하며 여러개의 useState를 사용하여 처리를 해야합니다.
                    반면 react-hook-form 라이브러리를 사용하면 상태관리, 유효성 검사, 에러처리를  useForm Hook을 통해 쉽게 관리가 가능하며, 간결해지기 때문에 가독성, 유지보수 측면에서 더욱 좋습니다.`,
                  ],
                },
              ],
            },
            {
              title: '아이디 저장시 쿠키에 저장한 이유',
              detail: [
                {
                  text: [
                    `아이디를 저장하는 이유 : 사용자 경험을 향상시키위해 브라우저에 저장하여 반복적인 로그인 작업을 줄여 시간과 노력을 절약해주기 위해서 입니다.`,
                  ],
                },
                {
                  text: [
                    '쿠키에 저장하는 이유 : 브라우저를 껏다 켜도 쿠키에 저장되어 있으며, 해커가 이메일만으로는 어떻게 할 수 없다고 생각하여 보안에 큰 문제가 없다고 생각하여 쿠키에 저장을 했습니다.',
                  ],
                },
                {
                  text: [
                    `그럼 LocalStorage에 저장해도 되는데 왜 쿠키에 저장을 선택했는지? 
                  물론 보안적인 부분에서 email만으로 해커가 직접적으로 해킹을 할 수 있는것은 아닙니다. 하지만 이메일 주소를 통해 "피싱" 공격이 가능합니다. 피싱은 이메일을 통해 사용자들을 속여 개인 정보나 로그인 자격 증명을 요구하는 가짜 웹 사이트로 유도하는 공격입니다.`,
                  ],
                },
                {
                  text: [
                    '따라서 삭제하는 코드가 없다면 영구적으로 저장되는 LocalStorage에 저장 하는것 보다 만료기간이 있는 쿠키에 저장 하는것이 더 좋다고 생각하여 쿠키에 저장했습니다',
                  ],
                },
              ],
            },
            {
              title: '큰 틀만 정하고 구체적인 부분에 대해 문서화 하지 않은 경우 발생하는 문제점',
              detail: [
                {
                  text: [
                    '기획자, 디자이너, 개발자 간에 회의를 통해 의논한 내용을 문서화하지 않고 머릿속으로만 기억하여 구현하는 데 어려움을 겪었습니다. 이로 인해 프로젝트를 진행하는데 있어서 혼란이 생겼습니다.',
                  ],
                },
                {
                  text: [
                    '개별적으로 개발에 회의를 통해 바뀌는 부분을 작성해두지 않아, 대화를 진행한 두 사람을 제외하고는 수정 사항을 알지 못하고 프로젝트 전체를 이해하는데 어려움이 발생하였습니다.',
                  ],
                },
                {
                  text: [
                    '문서화를 하지 않아 전반적인 진행 상황과 업무 분배, 일정 계획 등을 파악하기가 어려웠고, 팀원들 간의 협업과 일정 관리에 어려움을 겪었습니다.',
                  ],
                },
              ],
            },
            {
              title: 'Git Flow 방식에 대해 배웠습니다.',
              detail: [
                {
                  text: [
                    '안정성과 신뢰성: main 브랜치를 항상 안정적인 코드로 유지하고, 기능 개발은 feature 브랜치에서 진행하며, 완료되면 dev 브랜치로 병합후 문제가 없으면 main브랜치로 병합하며  코드의 안정성과 신뢰성을 유지할 수 있습니다.',
                  ],
                },
                {
                  text: [
                    '협업의 원활성: Git flow 방식을 통해  모두 독립적으로 작업을 진행했고, 브랜치를 통한 작업 분리로 인해 충돌이 최소화 됐습니다. 또한, 코드 리뷰와 병합 작업을 통해 팀원들과의 협업이 원활하게 진행되었습니다.',
                  ],
                },
              ],
            },
          ],
        },
        {
          title: '발생한 문제 및 해결',
          contents: [
            {
              title:
                '브라우저 창이 꺼지거나 페이지가 새로고침 되는 경우 Access Token이 사라져 에러 발생',
              detail: [
                {
                  text: [
                    `새로고침시 로컬에 저장해뒀던 AccessToken이 없어지는 문제가 발생
문제 발생 이유: axiosInstance를 통해 HTTP 요청을 보낼때 마다 Header에 accessToken을 보내도록 설정을 해줬습니다.
 하지만 새로고침시 리랜더링이 발생하고, 이때 로컬에 저장 되어있던 Access-Token이 초기화되어 사라지는것입니다.`,
                  ],
                },
                {
                  text: [
                    `문제해결
                  App컴포넌트에 아래의 사진에 있는 코드를 실행시켜주면 됩니다.
                  `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/persistentLogin.jpg',
                },

                {
                  text: [
                    `작동 이유
                  새로고침시 header에 저장된 값은 날라가지만, 쿠키에 Refresh-Token을 저장해뒀기 때문에 이것을 통해 Access-Token을 재발급 받아 로그인 유지가 가능합니다.
                  `,
                  ],
                },
              ],
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
              title:
                'toDoList를 삭제하기 위해 filter 함수를 사용하여 클릭한 li와 toDoList에 있는 li들을 비교해 List를 삭제하려던 중 데이터 타입이 달라 작동하지 않은 문제 발생',
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
