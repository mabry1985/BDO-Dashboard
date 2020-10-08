import React from "react";
import { BarterItem } from "../types";

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
  return (
    <div>
      <button onClick={() => onUpClick(barterItem, currentCity)}>up</button>
      <img src={img} alt={imgAlt} />
      <h5>{count}</h5>
      <button onClick={() => onDownClick(barterItem, currentCity)}>down</button>
    </div>
  );
};

export default InventorySlot;
