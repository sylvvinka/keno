import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Gallery from "./components/Gallery";
import Navigation from "./components/Navigation";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/galeria/:galleryId" element={<Gallery />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
