import React, { useEffect, useState } from 'react';
import Search from './Search';
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


      <Search></Search>
    </div>
  )
}

export default ShoppingKart;