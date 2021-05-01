import React, { useEffect, useState } from "react";
const ShoppingKart = (props) => {
  const [items, setItems] = useState(props.selectedItems);

  useEffect(() => {
    setItems(props.selectedItems);
  }, [props.selectedItems]);

  function renderItems() {
    return items.map((item) => (
      <div key={item.id} className="kart-item">
        <h3>{item.name}</h3>
        <h3 className="shopping-kart-number">{item.amount}</h3>
      </div>
    ));
  }

  return (
    <div className="shopping-kart">
      <p className="shopping-kart-title">MY KART</p>
      {renderItems()}
    </div>
  );
};

export default ShoppingKart;
