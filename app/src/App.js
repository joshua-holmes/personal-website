import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stack from "react-bootstrap/Stack";
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Stack gap={0}>
      <Landing />
      <About color="#ffb400" />
      <Projects color="#18a8ff" />
    </Stack>
  );
}

export default App;
