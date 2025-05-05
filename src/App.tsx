import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Selecting from "./pages/Selecting";
import Camera from "./pages/Camera";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Selecting />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
}

export default App;
