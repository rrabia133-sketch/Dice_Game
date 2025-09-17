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
  text-align: center;
  
  h1 {
    font-size: 100px;
    line-height: 100px;
    margin: 0;
  }
  p {
    font-size: 24px;
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 150px;
    h1 {
      font-size: 80px;
      line-height: 80px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    max-width: 120px;
    h1 {
      font-size: 60px;
      line-height: 60px;
    }
    p {
      font-size: 18px;
    }
  }
`;
