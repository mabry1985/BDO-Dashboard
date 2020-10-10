import React, { useState } from "react";
import { BarterItem } from "../types";
import {
  InventorySlotLayout,
  ButtonLayout,
  ItemImage,
  Count,
  ButtonContainer,
} from "./InventorySlotStyles";

interface InventorySlotProps {
  barterItem: BarterItem;
  currentCity: string;
  count: number;
  tier: number;
  img: string;
  imgAlt: string;
  onUpClick: (item: BarterItem, currentCity: string) => void;
  onDownClick: (item: BarterItem, currentCity: string) => void;
}

const InventorySlot = ({
  count,
  img,
  imgAlt,
  onUpClick,
  onDownClick,
  barterItem,
  currentCity,
}: InventorySlotProps) => {
  const [isShown, showButtons] = useState(false);

  return (
    <InventorySlotLayout
      onMouseEnter={() => showButtons(true)}
      onMouseLeave={() => showButtons(false)}
    >
      <ItemImage src={require(`../Images/${img}.png`)} alt={imgAlt} />
      <ButtonLayout>
        <ButtonContainer>
          {isShown && (
            <button onClick={() => onDownClick(barterItem, currentCity)}>
              -
            </button>
          )}
        </ButtonContainer>
        <Count>{count}</Count>
        <ButtonContainer>
          {isShown && (
            <button onClick={() => onUpClick(barterItem, currentCity)}>
              +
            </button>
          )}
        </ButtonContainer>
      </ButtonLayout>
    </InventorySlotLayout>
  );
};

export default InventorySlot;
