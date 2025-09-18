import styled from "styled-components";
import dice from "../images/dic.png";
import { Button } from "./Button";
export default function StartGame({ toggle }) {
  return (
    <div>
      <Container>
        <div>
          <img src={dice} alt="img"></img>
        </div>

        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </div>
  );
}
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 0 20px;

  img {
    max-width: 100%;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-size: 96px;
      white-space: nowrap;
      margin: 0;
    }
  }
  //responsive page
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .content {
      align-items: center;

      h1 {
        font-size: 48px;
      }
    }
  }

  @media (max-width: 480px) {
    .content {
      h1 {
        font-size: 36px;
      }
    }
  }
`;
