import styled from "styled-components";
export default function TotalScore() {
  return (
    <ScoreContainer>
      <div>
        <h1>0</h1>
        <p>Total Score</p>
      </div>
    </ScoreContainer>
  );
}
const ScoreContainer = styled.div`
  max-width: 200px;

  align-items: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
  }
`;
