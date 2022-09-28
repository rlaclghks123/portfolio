import { useRecoilValue } from "recoil";
import "./App.css";
import { openState } from "./atom";
import Contents from "./Contents/Contents";
import Cover from "./Cover/Cover";

function App() {
  const isOpen = useRecoilValue(openState);
  return (
    <>
      {isOpen ? <Contents /> : null}
      <Cover />
    </>
  );
}

export default App;
