import React, { useEffect, useState } from 'react';

const ShoppingKart = (props) => {

  // useEffect (() => {

  // }, [counter])


  return (
    <div>
      <button onClick={()=> {
          props.addCounter()
        }}>click me!</button>
      <ul>
        <li>items: {props.counter}</li>
      </ul>
    </div>
  )
}

export default ShoppingKart;