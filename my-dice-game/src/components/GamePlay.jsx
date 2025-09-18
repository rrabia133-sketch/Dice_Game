import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDic from "./RollDic";
import { useState } from "react";
import Showrules from "./showrules";
export default function GamePlay() {
  const [score, setscore] = useState(0);
  const [selectednumber, setselectnumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");
  const [rules, setrules] = useState(false);

  const rendomnumbergenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetscore = () => {
    setscore(0);
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
      <div className="btns">
        <Outline onClick={resetscore}>Reset Score</Outline>
        <BlackButton onClick={() => setrules((prev) => !prev)}>
          Show Rules
        </BlackButton>
      </div>
      {rules && <Showrules />}
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
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px auto;
    max-width: 220px;
  }
`;

const Outline = styled.button`
  margin-top: 20px;
  width: 220px;
  height: 44px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const BlackButton = styled.button`
  width: 220px;
  height: 44px;
  background-color: black;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
