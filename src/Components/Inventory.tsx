import React from "react";
import { BarterItem } from "../types";
import  InventorySlot from "./InventorySlot"

interface InventoryProps {
  barterItems: BarterItem[];
  count: number;
}

export const Inventory = (props: InventoryProps) => {
  return (
    <div className="card-list">

    </div>
  );
};

export default Inventory;