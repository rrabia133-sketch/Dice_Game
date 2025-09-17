import styled from "styled-components";
import dic1 from "../images/dic1.png";
export default function RollDic() {
  return (
    <DiceContainer>
      <div>
        <img src={dic1} alt=""></img>
      </div>
    </DiceContainer>
  );
}

const DiceContainer = styled.div``;
