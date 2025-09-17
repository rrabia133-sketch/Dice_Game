import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

export default function GamePlay() {
  return (
    <Main>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
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
