import './App.css';
import { Container, Slider, Box, TextField, Grid, Divider} from '@material-ui/core';
import Navbar from "./components/navbar"

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Navbar></Navbar>
      </Container>
    </div>
  );
}

export default App;
