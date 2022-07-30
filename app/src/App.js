import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./libs/font-awesome/css/font-awesome.css";


import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import PrivacyRenner from "./components/PrivacyRenner";
import PrivacyDG from "./components/PrivacyDG";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/privacy/renner-family-photos" element={<PrivacyRenner />} />
      <Route path="/privacy/dictionary-game" element={<PrivacyDG />} />
    </Routes>
  );
}

export default App;
