import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./00-NavBar/NavBar";
import HomePage from "./01-HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
