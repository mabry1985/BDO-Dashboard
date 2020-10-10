import styled from "styled-components";

export const InventorySlotLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  border-radius: 3px;
  background-color: black;
  width: 60px;
  height: 55px;
`;

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
  margin: 1px;
  margin-top: -21px;
  z-index: 2;
`;

export const ItemImage = styled.img`
  position: relative;
  align-self: center;
  top: 0;
  left: 0;
`;

export const Count = styled.h3`
  color: green;
  align-self: center;
`;

export const ButtonContainer = styled.div`
  width: 10px;
`;
