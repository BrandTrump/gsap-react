import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarTextEffect from "./pages/StarTextPage";
import Marquee from "./pages/Marquee";
import MovingBlobPage from "./pages/MovingBlobPage";
import HackerTextPage from "./pages/HackerTextPage";
import TwitchCardPage from "./pages/TwitchCardPage";
import GsapTextAnimationPage from "./pages/GsapTextAnimationPage";
import ShaderGradientPage from "./pages/ShaderGradientPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/star-text-effect" element={<StarTextEffect />} />
          <Route path="/marquee" element={<Marquee />} />
          <Route path="/moving-blob" element={<MovingBlobPage />} />
          <Route path="/hacker-text" element={<HackerTextPage />} />
          <Route path="/twitch-card" element={<TwitchCardPage />} />
          <Route
            path="/gsap-text-animation"
            element={<GsapTextAnimationPage />}
          />
          <Route path="/shader-gradient" element={<ShaderGradientPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
