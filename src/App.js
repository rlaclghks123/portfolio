import { useRecoilValue } from "recoil";
import { openState } from "./atom";
import Contents from "./Contents/Contents";
import Cover from "./Cover/Cover";
import GlobalStyle from "./GlobalStyle";

function App() {
  const isOpen = useRecoilValue(openState);
  return (
    <>
      <GlobalStyle />
      {isOpen ? <Contents /> : null}
      <Cover />
    </>
  );
}

export default App;
