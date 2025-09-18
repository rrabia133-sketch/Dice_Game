import styled from "styled-components";

export const Button = styled.button`
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
`;
