import { atom } from 'recoil';

export const projectContents = atom({
  key: 'projectContents',
  default: [
    {
      title: 'random-game',
      images: ['https://rlaclghks123.github.io/portfolio/images/random-game/표지.jpg'],

      projectType: '개인 프로젝트',
      languages: ['React', 'Typescript', 'RTL', 'MSW'],
      description: [
        {
          title: 'Introduce',
          img: 'https://rlaclghks123.github.io/portfolio/images/random-game/표지.jpg',
          githubUrl: 'https://github.com/rlaclghks123/random-game',
          contents: [{ title: '친구들과 내기를 하기 위해 제작한 복불복 게임' }],
        },

        {
          title: '프로젝트 구현 기능',
          contents: [
            {
              title: '웹 표준을 지키며  SEO 향상을 위한 노력',
              detail: [
                {
                  text: ['Lighthouse 100점 유지'],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/lighthouse.jpg',
                },
                {
                  text: [
                    `시맨틱 태그 사용
                    
                    - 큰 틀은 header,main을 사용했습니다.

                    - 시작하기 버튼은 링크로 사용되기 때문에 Link로 사용했으며, FAQ와 Guide는 모달을 띄우는 것이므로 button을 사용했습니다.

                    - modal의 경우 공통된 주제를 가지고 있다고 생각하여 section을 사용했습니다.

                    - 설명하는 List의 경우 순서가 없기 때문에 ol, li를 사용했고, FAQ의 경우 순서가 없기 때문에 ul, li를 사용했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/시맨틱.jpg',
                },
                {
                  text: [
                    `키워드 선정 및 빈번하게 사용
                    
                    - 검색 키워드가 본문에 더 많이 사용된다면 랭킹 우선순위에 더욱 높아지기 때문에 적절한 키워드를 선택했습니다. 'random-game'
                    
                    - 많이 사용하는것도 좋지만 불편함 없이 적절하게 최대한 많이 본문에 키워드를 작성했습니다.
                    `,
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/시맨틱.jpg',
                },
              ],
            },
            {
              title: 'open API 에러 발생 시 Email JS 라이브러리를 활용하여 유지보수 향상',
              detail: [
                {
                  text: [
                    'Giphy API를 사용하여 사진을 받아오는데, 만약 에러 발생 시 form 창이 나타나도록 구현했습니다 ',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/form.jpg',
                },
                {
                  text: [
                    'Email JS를 활용하여 저의 이메일로 에러메세지가 전송되도록 구현하여 유지보수를 향상하는 데 노력했습니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/email.jpg',
                },
              ],
            },
            {
              title: 'React-Testing-Library, MSW를 통해 사용자 입력 값 및  API 테스트 진행',
              detail: [
                {
                  text: [
                    '우선 클라이언트 테스트를 진행했으며, 임의로 상태 값을 400으로 전달하여 form 창이 나타나는지 확인했습니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/form.jpg',
                },
                {
                  text: [
                    'Home 화면에서 Guide, FAQ를 누르면 모달창이 잘 나타나는지 확인하는 테스트를 진행했습니다',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/homeTest.jpg',
                },
                {
                  text: [
                    'Game 화면에서 API의 에러 코드별로 에러 내용이 잘 나타나는지 확인했습니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/apiTest.jpg',
                },
                {
                  text: [
                    'Game 화면에서 사용자의 입력값에 따른 이미지가 나타나는지 테스트를 진행했습니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/inputTest.jpg',
                },
              ],
            },
            {
              title: '반복되는 컴포넌트 생성',
              detail: [
                {
                  text: [
                    '공통적인 Header 부분과 다른 부분인 Main 부분을 layout으로 나눠 재활용 했습니다.',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/layout.jpg',
                },
                {
                  text: [
                    '다른 부분인 click handler와 title은 props로 받아 재활용 가능한 Modal 컴포넌트 생성 및 사용',
                  ],
                  img: 'https://rlaclghks123.github.io/portfolio/images/random-game/modal.jpg',
                },
              ],
            },
          ],
        },
        {
          title: '프로젝트를 통해 배운점',
          contents: [
            {
              title: 'Vite와 CRA의 차이점',
              detail: [
                {
                  text: [
                    'CRA는 초기설정이 간편하기 때문에 많이 사용합니다. 하지만 Webpack을 사용하여 번들링 하며, webpack은 NodeJs패키지 이므로 단일 쓰레드에서 동작하기 때문에 상대적으로 속도가 느립니다.',
                    '반면 Vite는 go언어로 작성된 EsBuild를 사용하여 번들링 하며 EsBuild 또한 단일 쓰레드에서 동작하지만 go언어의 내부적으로 병렬처리가 가능하기 때문에 속도가 빠릅니다. 또한 ESM을 기반으로 해서 HMR을 지원하기 때문에 처음 번들링 후 수정 사항이 생기면 수정된 부분만 새로 번들링 하므로 빠른 속도를 가집니다. 10배~ 100배까지 차이가 난다고 합니다.',
                    '간단하고 빠른 설정을 원한다면 Vite가 더 낫고 기능이 풍부하고 광범위하게 지원되는 도구를 원한다면 CRA가 더 나은 선택으로 보입니다. 따라서 Vite를 통해 프로젝트를 진행했습니다.',
                  ],
                },
              ],
            },
            {
              title: 'SEO 최적화 방법',
              detail: [
                {
                  text: [
                    `  첫째 : lighthouse 높은 점수 유지,
                    - 홈페이지, 게임페이지 둘 다 lighthouse 100점 유지,
                    - 글자색과 배경색의 명도 대비를 4.5:1 이상을 유지했습니다.,
                    - robots.txt 파일을 생성하였습니다. 단 저의 프로젝트에선 웹크롤링을 차단할 페이지가 없어 모두 Allow로 허용했습니다.`,
                  ],
                },
                {
                  text: [
                    `둘째 : 사이트 보안 HTTP보단 HTTPS 사용
                     -> Vercel에 배포를 통해 HTTPS 도메인 사용`,
                  ],
                },
                {
                  text: [
                    `셋째 : URL을 키워드와 관련해서 빌드
                    -> URL에 한글로 복불복게임을 지정할 수 없어 가장 적합한 영어 단어인 random-game 으로 구성했습니다.`,
                  ],
                },
                {
                  text: [
                    `넷째 : 모바일 친화적
                    -> 모바일 친화적인지 확인하는 사이트에서 60~70점 정도면 모바일 친화적이다 라고 합니다.`,
                  ],
                },
                {
                  text: [
                    `다섯째 : img alt 속성 추가, meta태그, title 작성
                    - Img에 alt속성을 추가하여 이미지가 나타나지 않을때 설명하는 글을 나타나도록 합니다
                    - meta 태그 작성 : 구글 크롤러는 meta태그를 작성한다고 해서 우선순위가 높아지지는 않는다고 합니다. 하지만 meta tag에 글을 잘 작성한다면 사용자들의 클릭 수를 높여주기 때문에 꼭 작성해야 합니다. meta 태그 내부에도 최대한 키워드를 많이 넣어주도록 합니다.`,
                  ],
                },
                {
                  text: [
                    `여섯째 : 자주 사용할 키워드를 선정하고, 본문에 사용자에게 불편함을 느끼지 않는 정도로 최대한 많이 작성해줍니다
                    - 검색 키워드가 본문에 더 많이 사용된다면 랭킹 우선순위에 더욱 높아진다고 합니다. 따라서 적절하게 최대한 많이 작성합니다`,
                  ],
                },
                {
                  text: [
                    `일곱째 : 시맨틱 태그 사용
                    - div 태그를 통해 구성할 수 있지만, 시맨틱 태그를 사용하여 layout을 구성한다면 SEO에 최적화에 더욱 도움이 됩니다`,
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
              title: '테스트시 Router 문제발생',
              detail: [
                {
                  text: [
                    `문제발생 
제가 프로젝트를 진행하며 React-Router-Dom을 활용하여 Link를 사용하기 위해 BrowserRouter로 감싸주었습니다. 이때 BrowserRouter는 브라우저 History API를 사용해 현재 위치의 URL을 저장해주는 역할을 합니다.
즉 실제 브라우저 환경이 필요한데 테스트 환경에서는 실제 브라우저가 없으므로 BrowserRouter를 사용할 수 없습니다.
따라서 Link 테그가 BrowerRouter 내부에 없게 되어 문제가 발생하게 된 것입니다.
`,
                  ],
                },
                {
                  text: [
                    `문제해결
                  MemoryRouter를 사용하여 브라우저가 아닌 메모리 기반의 라우팅을 시뮬레이트할 수 있습니다.
MemoryRouter를 사용하면 브라우저 히스토리가 아닌 메모리 상에서 라우팅을 처리하므로, 테스트 환경에서도 라우팅과 관련된 테스트를 수행할 수 있습니다.
                  `,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
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
  ],
});
