import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDic from "./RollDic";
import { useState } from "react";
export default function GamePlay() {
  const [score, setscore] = useState(0);
  const [selectednumber, setselectnumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");

  const rendomnumbergenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    if (!selectednumber) {
      seterror("You have not selected any number");
      return;
    }
    seterror("");

    const randomnumber = rendomnumbergenerate(1, 7);
    setcurrentdice(randomnumber);

    if (selectednumber == randomnumber) {
      setscore(score + randomnumber);
    } else {
      setscore(score - 2);
    }
    setselectnumber(undefined);
  };
  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          setselectnumber={setselectnumber}
          selectednumber={selectednumber}
        />
      </div>
      <RollDic currentdice={currentdice} rolldice={rolldice} />
      <button>Reset Score</button>
      <button>Show Rules</button>
    </Main>
  );
}

const Main = styled.div`
  padding: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
