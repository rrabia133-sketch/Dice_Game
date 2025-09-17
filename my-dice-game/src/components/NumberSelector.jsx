import { useState } from "react";
import styled from "styled-components";

export default function NumberSelector() {
  const arrnumber = [1, 2, 3, 4, 5, 6];
  const [selectednumber, setselectnumber] = useState();
  console.log(selectednumber);
  return (
    <div>
      {arrnumber.map((value, index) => (
        <Box key={index} onClick={() => setselectnumber(value)}>
          {value}
        </Box>
      ))}
    </div>
  );
}
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
`;
