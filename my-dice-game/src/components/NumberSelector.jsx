import styled from "styled-components";

export default function NumberSelector({
  setselectnumber,
  selectednumber,
  error,
  seterror,
}) {
  const arrnumber = [1, 2, 3, 4, 5, 6];
  const numberselector = (value) => {
    setselectnumber(value);
    seterror("");
  };

  console.log(selectednumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrnumber.map((value, index) => (
          <Box
            isSelected={value == selectednumber}
            key={index}
            onClick={() => numberselector(value)}
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
  width: 100%;

  .error {
    color: red;
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
  }

  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  p {
    font-size: 24px;
    margin: 8px 0 0 0;
    text-align: right;
  }

  @media (max-width: 1024px) {
    .flex {
      gap: 20px;
    }
    p {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    .flex {
      gap: 16px;
      justify-content: center;
    }
    p {
      font-size: 20px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 8px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 360px) {
    .flex {
      gap: 6px;
    }
    p {
      font-size: 14px;
    }
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
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 68px;
    width: 68px;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 45px;
    width: 45px;
    font-size: 16px;
  }

  @media (max-width: 360px) {
    height: 40px;
    width: 40px;
    font-size: 14px;
  }
`;
