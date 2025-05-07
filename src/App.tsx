import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Selecting from "./pages/Selecting";
import Camera from "./pages/Camera";
import Result from "./pages/Result";
import ImageUpload from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Selecting />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/result" element={<Result />} />
        <Route path="/test" element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
