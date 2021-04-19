import './App.css';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar'
import ItemList from './components/ItemList';
import ShoppingKart from './components/ShoppingKart';

function App() {

  const [ counter, setCounter ] = useState(0);

  function addCounter () {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
    <Navbar></Navbar>
    <Container>
      <section className="item-list">

      <ItemList counter={counter} addCounter={addCounter}></ItemList>
      <ShoppingKart counter={counter} addCounter={addCounter}></ShoppingKart>
      </section>
    </Container>
    </div>
  );
}

export default App;
