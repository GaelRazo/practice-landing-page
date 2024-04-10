import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nosotros from "./screens/Nosotros";
import { Footer, Hero, Navbar } from "./components";
import HOCLayout from "./components/HOCLayout";
import Servicios from "./screens/Servicios";
import Galeria from "./screens/Galeria";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/nosotros"
          element={
            
              <Nosotros />
            
          }
        />
        <Route
          path="/servicios"
          element={
            
              <Servicios />
            
          }
        />
        <Route
          path="/galeria"
          element={
            
              <Galeria />
            
          }
        />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
