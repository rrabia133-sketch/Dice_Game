import styled from "styled-components";
import dic1 from "../images/dice_1.png";
import dic2 from "../images/dice_2.png";
import dic3 from "../images/dice_3.png";
import dic4 from "../images/dice_4.png";
import dic5 from "../images/dice_5.png";
import dic6 from "../images/dice_6.png";

export default function RollDic({ currentdice, rolldice }) {
  const diceImages = [dic1, dic2, dic3, dic4, dic5, dic6];

  return (
    <DiceContainer>
      <div className="dic" onClick={rolldice}>
        <img src={diceImages[currentdice - 1]} alt="dice"></img>
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  p {
    font-weight: 500;
    font-style: Medium;
    font-size: 24px;
  }
`;
