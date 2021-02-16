# 1. SETUP
> nextjs-typescript를 베이스로 프로젝트 시작전 기본 설정 순서 정리

1. 타입스크립트 세팅 
    - [참고주소](https://nextjs.org/docs/basic-features/typescript)
    ```
    touch tsconfig.json
    npm i --save-dev  typescript @types/react @types/node
    npm run dev
    ```
   - 위 순서대로 하면 nextjs에서의 typescript 세팅이 완료된다.

2. js => tsx로 변경

3. 린트 설정
   ```
   npx eslint --init
   
   ✔ How would you like to use ESLint? · style
   ✔ What type of modules does your project use? · esm
   ✔ Which framework does your project use? · react
   ✔ Does your project use TypeScript? · Yes
   ✔ Where does your code run? · browser, node
   ✔ How would you like to define a style for your project? · guide
   ✔ Which style guide do you want to follow? · airbnb
   ✔ What format do you want your config file to be in? · JavaScript
   
   Yes....
   ```
   
4. 라이브러리 설치
   - [axios](https://github.com/axios/axios)
   - [emotion](https://emotion.sh/docs/@emotion/react)
   - [redux-toolkit](https://redux-toolkit.js.org/)
   - [react-redux](https://react-redux.js.org/)
   ```
   npm i axios @emotion/styled @emotion/react @reduxjs/toolkit react-redux
   ```

5. 테스트 관련 라이브러리 설치
   - [jest](https://jestjs.io/)
   - [testing-library](https://testing-library.com/)
   - [msw](https://mswjs.io/)
   ```
   npm i --save-dev jest msw @testing-library/react @testing-library/jest-dom @types/jest
   
   // fireEvent 대신? userEvent를 사용할 경우 설치
   npm i --save-dev @testing-library/user-event
   ```

6. jest 설정파일 / babel 설정파일 추가
   ```js
   // jest.config.js
   module.exports = {
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
   };
   
   // jest.setup.js
   import '@testing-library/jest-dom';
   ```
   ```json
   // .babelrc
   {
    "presets": ["next/babel"]
   }
   ```

7. 폴더구조
```
/
ㄴ public
ㄴ src
   ㄴ __tests__
   ㄴ consts
   ㄴ pages
   ㄴ hooks
   ㄴ components
   ㄴ reducers
   ㄴ store
   ㄴ styles
   ㄴ services
```
