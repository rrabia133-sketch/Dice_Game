import { styled } from "styled-components";
import React from "react";

export default function showrules() {
  return (
    <div>
      <RulesContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice if you get wrong guess then 2 point
              will be dedcuted{" "}
            </li>
          </ul>
        </div>
      </RulesContainer>
    </div>
  );
}
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
