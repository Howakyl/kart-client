import './App.css';
import { Button, Container } from '@material-ui/core';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Container>
      <Button  variant="contained" color="primary">Hello, world</Button>
    </Container>
    </div>
  );
}

export default App;
