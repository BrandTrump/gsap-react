import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarTextEffect from "./pages/StarTextPage";
import Marquee from "./pages/Marquee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/star-text-effect" element={<StarTextEffect />} />
          <Route path="/marquee" element={<Marquee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
