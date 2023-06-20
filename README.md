# 목차

- [미리보기](#미리보기)
- [파일구조](#파일구조)
- [기능목록](#기능목록)

# 미리보기
https://github.com/rlaclghks123/momentom-2021/assets/55423198/9bad3c67-5594-49f6-ae0c-63ee5e8d38b1

# 모바일 버전 
https://github.com/rlaclghks123/portfolio/assets/55423198/118e5e17-da10-47ff-95a9-a8324ba7b0ea
# 파일구조
 
```js
📦src
 ┣ 📂components
 ┃ ┗ 📜Accordion.jsx
 ┃ ┗ 📜ProjectItem.jsx
 ┃ ┗ 📜Cover.jsx
 ┃ ┗ 📜DoubleBox.jsx 
 ┃ ┗ 📜NavBar.jsx
 ┃
 ┣ 📂constants
 ┃ ┗ 📜sizeConstatns.js
 ┃ ┗ 📜urlConstants.js
 ┣ 📂routes
 ┃ ┣ 📜About.jsx
 ┃ ┣ 📜ProjectIntroduce.jsx
 ┃ ┗ 📜NotFound.jsx
 ┃ ┗ 📜Projects.jsx 
 ┃
 ┣ 📜App.js
 ┣ 📜atom.jsx
 ┣ 📜GlobalStyle.jsx.jsx
 ┗ 📜styled.d.jsx 
```

# 기능목록 
- [x] 다크모드 기능 구현
  - styled-componets의 ThemeProvider를 통해 다크모드 구현 

- [x] Recoil을 통한 상태관리
  - Recoil을 통해 여러곳에서 사용하는 상태들을 atom으로 관리
    
- [x] Accordion UI를 사용하여 정보를 숨기고 절약함으로써 공간을 효과적으로 활용하고 사용자 경험을 향상시켰습니다.

- [x] Framer-motion을 사용하여 웹페이지를 좀 더 동적으로 구현

- [x] media-query를 활용하여 모바일 버전의 UI도 문제없도록 반응형으로 구현
