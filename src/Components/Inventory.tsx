import React from "react";
import InventorySlot from "./InventorySlot";
import styled from "styled-components";
import { BarterItem, Storage } from "../types";

export const Grid = styled.div`
  width: 475px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface InventoryProps {
  barterItems: BarterItem[];
  currentStorage: Storage[];
  currentCity: string;
  onUpClick: (item: BarterItem, currentCity: string) => void;
  onDownClick: (item: BarterItem, currentCity: string) => void;
}

export const Inventory = (props: InventoryProps) => {

  return (
    <Grid>
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
    </Grid>
  );
};

export default Inventory;
