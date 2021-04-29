import React, { useEffect, useState } from 'react';
const ShoppingKart = (props) => {
  const [ items , setItems ] = useState(props.selectedItems);

  useEffect(() => {
    setItems(props.selectedItems);

  }, [props.selectedItems])


  function renderItems () {
    return items.map((item, index) => (
      <div key={index} className="kart-item">
        <p>{item.name}</p>
        <p>Amount: {item.amount}</p>
      </div>
    
  ))
  }

  return (
    <div>
      <h3>My Kart</h3>
      {renderItems()}
    </div>
  )
}

export default ShoppingKart;