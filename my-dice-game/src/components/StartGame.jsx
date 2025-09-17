import styled from "styled-components";
import dice from "../images/dic.png";
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

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  background-color: black;
  border-radius: 5px;
  color: white;
  transition: 0.4s background ease-in;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 40px;
    font-size: 14px;
  }
`;
