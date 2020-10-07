import React from "react";
import InventorySlot from "./InventorySlot";

import { BarterItem } from "../types";


interface InventoryProps {
  barterItems: BarterItem[];
}

export const Inventory = (props: InventoryProps) => {
  return (
    <div className="card-list">
      {props.barterItems && props.barterItems.map(item => <InventorySlot count={item.count} tier={item.tier} img={item.img} imgAlt={item.name} />)}
    </div>
  );
};

export default Inventory;