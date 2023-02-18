import "./App.css";
import "./font/Cattyla.ttf";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import VoiceLines from "./components/pages/VoiceLines";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/voice-lines" exact element={<VoiceLines />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
