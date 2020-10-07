import React from 'react';

interface InventorySlotProps {
  count: number,
  tier: number,
  img: string,
  imgAlt: string
}

const InventorySlot = ({count, img, imgAlt  } : InventorySlotProps ) => {
  return (
    <div>
      <img src={img} alt={imgAlt}/>
      <h5>{count}</h5>
    </div>
  )
}

export default InventorySlot;