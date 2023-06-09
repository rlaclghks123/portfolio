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
                    '기획자, 디자이너, 개발자 간에 회의를 통해 의논한 내용을 문서화하지 않고 각자 머릿속으로만 기억하여 구현하는 데 어려움을 겪었습니다. 이로 인해 프로젝트를 진행하는데 있어서 많은 혼란이 생겼습니다.',
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
            {
              title: '의사소통의 중요성',
              detail: [
                {
                  text: [
                    `의사소통의 중요성 : 백엔드분들과 주기적으로 의사소통을 해야 했는데, 모든 기능을 다 구현 후, 맞춰보려고 하다 보니 많은 문제가 발생했습니다.
예를 들어 로그인 기능을 구현했으면, 백엔드분들과 소통해서 로그인이 잘 작동되는지, 로그인 유지 기능은 어떻게 처리할 것인지, 로그인 유효성 검사는 어떻게 통일할 것인지 등 많은 대화를 통해 맞춰봤어야 했는데 그러지 못해 개발 기간이 늦어졌고, 많은 문제가 발생했습니다.
                    `,
                  ],
                },
                {
                  text: [
                    `잡담도 힘이다.
                    원래 정해둔 기한까지 프로젝트를 잘 마무리하지 못하고, 각자 취업 준비, 바쁜 일정으로 인해 프로젝트를 그만하자고 한 날 백엔드 분들과 프로젝트 회고 겸 이런저런 잡담을 나눴습니다.
"마지막 날" 잡담을 통해 서로 가까워졌고, 서로의 고충도 알게 되었습니다. 또한 서로 말하지 않고 기다리고 있었던 그런 상황도 있었습니다.
진작 잡담이라도 많이 했었더라면 더 빨리, 더 많은 문제를 발견하고, 해결할 수 있지 않았을까 하는 생각을 많이 했었습니다.
                    `,
                  ],
                },
              ],
            },
            {
              title: '클린코드',
              detail: [
                {
                  text: [
                    `하드코딩 방지를 위해 상수화 : 
                    하드코딩(Hard-coding)이란  데이터를 소스 코드에 직접 기록하는 것을 의미합니다. 이는 코드의 유지보수 및 변경에 취약하며, 예기치 못한 에러를 발생할 수 있습니다.
                    
                    상수화를 통해 코드에서 일반적으로 변경될 가능성이 있는 값을 한곳에서 관리를 하여 유지보수를 좋게 했고,   반복되는 값을 하나의 상수로 통일시켜 코드 중복을 줄였습니다. 
                    
                    또한, 상수를 사용하면 값을 직접 수정하는 것이 아닌, 값을 상수 변수에 담아 일관된 변경이 가능하며, 변수의 이름을 의미있게 짓는다면 가독성도 높아지게 됩니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/review-cock/cleanCode_const.jpg',
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
      languages: ['HTML', 'CSS', 'Vanilla Js'],
      description: [
        {
          title: 'Preview',
          img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/basic.jpg',
          githubUrl: 'https://github.com/rlaclghks123/momentom-2021',
          contents: [],
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
              detail: [
                {
                  text: [
                    `localStorage에 저장할때 key값을 하드코딩을 하여 key값의 이름이 달라 값이 저장이 되지 않았던 문제를 겪었습니다. 
                    큰일은 아닌데, 엄청난 큰일입니다.
                    "하드코딩을 하지 말고, 상수 처리를 하라" 는 말을 뼈저리게 느끼게 되었습니다.
                    `,
                  ],
                },
                {
                  text: [`문제발생`],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/localStorageProblem.jpg',
                },
                {
                  text: [`문제해결`],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/localStorageSolution.jpg',
                },
              ],
            },
            {
              title: 'toDoList 삭제 되지 않는 문제 발생',
              detail: [
                {
                  text: [
                    `ToDoList 삭제하는 코드

                    1. 삭제 button을 클릭합니다.
                    2. 삭제 button의 부모 태그인 li를 찾아줍니다.
                    3. remove 메소드를 사용하여 li를 제거해줍니다.
                    4. filter 메서드를 사용하여 기존의 toDos배열과 비교해서, 현재 클릭한 li의 id값과 다른 값들로만 새로운 배열을 toDos에 만들어줍니다.
                    5. filter한 값을 LocalStorage에 새롭게 저장해줍니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/remove1.jpg',
                },
                {
                  text: [
                    `문제 발생

                    1. 삭제는 잘 되지만, 새로고침시 삭제한 list가 다시 나타나는 문제가 발생
                    → localStorage를 확인 해보니 list가 삭제되었음에도, localStorage에 삭제되지 않음을 확인할 수 있습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/remove2.jpg',
                },

                {
                  text: [
                    `에러 발견
                    list를 삭제 후 filter 과정에서 문제가 발생한 것 같아 filter함수에서 비교하는 id값을 console.log로 확인 해보니 id값들의 type이 다른걸 알 수 있었습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/remove3.jpg',
                },

                {
                  text: [
                    `에러 해결
                    따라서 사진과 같이 li의 id값을 Number 형식으로 바꿔주니 잘 작동했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/remove4.jpg',
                },

                {
                  text: [
                    `궁금증
                    분명 Number 타입의 숫자 값을 저장해 줬는데 왜 li의 id 값은 문자열로 되어있을까요?
                    → HTML에서 id 속성값은 문자열 형태로 지정된다고 합니다. 
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/remove5.jpg',
                },
              ],
            },
          ],
        },
        {
          title: '클론코딩 후 스스로 개선점 및 추가기능',
          contents: [
            {
              title: '빈 값도 toDoList에 추가되는 문제를 개선',
              detail: [
                {
                  text: [
                    `불편함 발생 : ToDoList를 추가하는 과정에서 빈 값도 추가되는, 사용자 입장에서 불편함을 느낄 수 있다고 생각했습니다.
                     빈 값을 입력 받으면 alert를 통해 사용자에게 "값을 입력해주세요" 라는 요청 문구를 통해 알려주고, ToDoList에 값을 추가하지 않도록 기능을 추가했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/emptyValImg.jpg',
                },
                {
                  text: [
                    `불편함 해결 : trim() 함수를 사용하여 입력값의 앞 뒤 공백을 제거한뒤, if 문을 통해 입력받은 값이 빈값('')일 경우 alert로 사용자에게 알려주고, 종료하여 값을 추가하지 않도록 구현했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/emptyAlertImg.jpg',
                },
              ],
            },
            {
              title: '삭제 버튼 클릭시 바로 삭제 되는 부분 개선',
              detail: [
                {
                  text: [
                    `불편함 발생 :  X 버튼 클릭 시 바로 삭제되도록 구현했었습니다. 그러나 실수로 X 버튼을 누를 수 있으므로 사용자 관점에서 불편함을 느낄 수 있다고 생각했습니다.
                    `,
                  ],
                },
                {
                  text: [
                    `불편함 해결 : confirm 메소드를 통해 삭제 시 확인 요청을 받도록 수정했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/confirmMsgImg',
                },
              ],
            },
            {
              title: '메모장 전체화면, 축소, 창닫기 3가지 기능 추가',
              detail: [
                {
                  text: [
                    `Event에 익숙해지기 위해 Click Event를 통해 전체화면, 축소, 창 닫기 3가지 기능을 구현해 봤습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/originMemo.jpg',
                },

                {
                  text: [
                    `창닫기
                     click Event를 사용하여 메모장의 빨간버튼을 클릭하면 메모장이 닫아지도록 구현했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/closedMemo.jpg',
                },
                {
                  text: [
                    `전체화면
                     click Event를 사용하여 메모장의 초록버튼을 클릭하면 메모장이 확대 되도록 구현했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/zoomInMemo.jpg',
                },
                {
                  text: [
                    `축소
                     click Event를 사용하여 메모장의 노란버튼을 클릭하면 확대 되어있던 메모장이 축소 되도록 구현했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/todo_list_img/originMemo.jpg',
                },
              ],
            },
          ],
        },
        {
          title: 'ToDoList 회고',
          contents: [],
          url: 'https://velog.io/@rlaclghks123/%ED%9A%8C%EA%B3%A0-Vanilla-Js%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-ToDoList-%EB%A7%8C%EB%93%A4%EA%B8%B0',
        },
      ],
    },
  ],
});
