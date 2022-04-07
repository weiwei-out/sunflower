import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./00-NavBar/NavBar";
import HomePage from "./01-HomePage/HomePage";
import Portfolio from "./02-Portfolio/Portfolio";
import About from "./03-About/About";

function App() {
  return (
    <div id="Background">
      <div id="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
