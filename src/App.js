import './App.css';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar'
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Container>
      <section className="item-list">

      <ItemList></ItemList>
      </section>
    </Container>
    </div>
  );
}

export default App;
