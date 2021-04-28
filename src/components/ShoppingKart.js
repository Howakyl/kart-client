import React from 'react';
const ShoppingKart = (props) => {

  return (
    <div>
      <h3>My Kart</h3>
      {props.selectedItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        
      ))}
      {/* <p>{props.selectedItems}</p> */}
    </div>
  )
}

export default ShoppingKart;