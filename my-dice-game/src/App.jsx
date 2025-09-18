import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isgamestart, setisgamestart] = useState(false);
  const togglegameplay = () => {
    setisgamestart((prev) => !prev); // is just for ulta sedha like true ha to false ho like this.
  };
  return (
    <>{isgamestart ? <GamePlay /> : <StartGame toggle={togglegameplay} />}</>
  );
}

export default App;
