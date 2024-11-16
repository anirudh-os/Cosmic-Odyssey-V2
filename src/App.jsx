import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import TON_618 from "./components/Ton";
import MilkyWay from "./components/MilkyWay";
import Mars from "./components/Mars";
import AlphaCentauri from "./components/AlphaCentauri";
import Betelgeuse from "./components/Betelgeuse";
import AndromedaGalaxy from "./components/AndromedaGalaxy";
import CrabNebula from "./components/CrabNebula";
import MagellanicCloud from "./components/MagellanicCloud";
import Polaris from "./components/Polaris";
import Sirius from "./components/Sirius";
import TriangulumGalaxy from "./components/TriangulumGalaxy";
import WhirlpoolGalaxy from "./components/WhirlpoolGalaxy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />

        {/* Cosmic Destinations */}
        <Route path="/ton618" element={<TON_618 />} />
        <Route path="/milkyway" element={<MilkyWay />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/alphacentauri" element={<AlphaCentauri />} />
        <Route path="/betelgeuse" element={<Betelgeuse />} />
        <Route path="/andromedagalaxy" element={<AndromedaGalaxy />} />
        <Route path="/crabnebula" element={<CrabNebula />} />
        <Route path="/magellaniccloud" element={<MagellanicCloud />} />
        <Route path="/polaris" element={<Polaris />} />
        <Route path="/sirius" element={<Sirius />} />
        <Route path="/triangulumgalaxy" element={<TriangulumGalaxy />} />
        <Route path="/whirlpoolgalaxy" element={<WhirlpoolGalaxy />} />

        {/* Fallback Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
