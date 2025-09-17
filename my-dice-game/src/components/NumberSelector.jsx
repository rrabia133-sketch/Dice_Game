import { useState } from "react";
import styled from "styled-components";

export default function NumberSelector() {
  const arrnumber = [1, 2, 3, 4, 5, 6];
  const [selectednumber, setselectnumber] = useState();
  console.log(selectednumber);
  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrnumber.map((value, index) => (
          <Box
            isSelected={value == selectednumber}
            key={index}
            onClick={() => setselectnumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p> Select Number</p>
    </NumberSelectorContainer>
  );
}

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) =>
    props.isSelected ? "black" : "white"}; // when box select bg color change
  color: ${(props) =>
    props.isSelected ? "white" : "black"}; // when box select text color change
`;
