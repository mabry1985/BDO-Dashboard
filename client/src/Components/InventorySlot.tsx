import React from 'react';


interface InventorySlotProps {
  count: number,
  img: string,
  imgAlt: string
}

const InventorySlot = ({count, img, imgAlt  } : InventorySlotProps ) => {
  return <img src={img} alt={imgAlt}/>

}

export default InventorySlot;