// src/App.js
import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Specials from "./components/Specials"; // Corrected import path

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/specials" element={<Specials />} />
      </Routes>
    </>
  );
}

export default App;
