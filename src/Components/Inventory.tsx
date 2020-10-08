import React from "react";
import InventorySlot from "./InventorySlot";

import { BarterItem, Storage } from "../types";

interface InventoryProps {
  barterItems: BarterItem[];
  currentStorage: Storage[];
  currentCity: string;
  onUpClick: (item: BarterItem, currentCity: string) => void;
  onDownClick: (item: BarterItem, currentCity: string) => void;
}

export const Inventory = (props: InventoryProps) => {
  return (
    <div className="card-list">
      {props.barterItems &&
        props.barterItems.map((item, index) => (
          <InventorySlot
            key={index}
            barterItem={item}
            currentCity={props.currentCity}
            count={item.count}
            tier={item.tier}
            img={item.img}
            imgAlt={item.name}
            onUpClick={props.onUpClick}
            onDownClick={props.onDownClick}
          />
        ))}
    </div>
  );
};

export default Inventory;
