import './App.css';
import Stack from "react-bootstrap/Stack";
import Landing from './components/Landing';
import About from './components/About';

function App() {
  return (
    <Stack gap={1}>
      <Landing />
      <About />
    </Stack>
  );
}

export default App;
