import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDic from "./RollDic";

export default function GamePlay() {
  return (
    <Main>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDic />
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
