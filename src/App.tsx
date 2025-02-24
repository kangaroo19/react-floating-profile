// import ReactFloatingProfile from "../dist";

import ReactFloatingProfile from "./lib/react-floating-profile";

function App() {
  return (
    <>
      {/* <ReactFloatingProfile username="yooha0518" /> */}
      {/* <ReactFloatingProfile username="femmefatalehaein" /> */}
      <ReactFloatingProfile username="kangaroo19" />
    </>
  );
}

export default App;

// 각각 보일 컴포넌트를 사용자 측에서 핸들링하게 하는것도 좋을듯
// ex) userObj.location 값 true 로 하면 보이게

// 나중에 확인
// css 복붙 어쩌고
// https://vccolombo.github.io/blog/tsc-how-to-copy-non-typescript-files-when-building/

// css 번들링 관련
// https://stackoverflow.com/questions/57878330/how-to-bundle-css-with-a-component-as-an-npm-package
