import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Nosotros from "./screens/Nosotros";
import { Hero, Navbar } from "./components";
import HOCLayout from "./components/HOCLayout";
import Servicios from "./screens/Servicios";
import Galeria from "./screens/Galeria";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "Nosotros",
    element: (
      <HOCLayout>
        <Nosotros/>
      </HOCLayout>
    ),
  },
  {
    path: "Servicios",
    element: (
      <HOCLayout>
        <Servicios/>
      </HOCLayout>
    ),
  },
  {
    path: "Galeria",
    element: (
      <HOCLayout>
        <Galeria/>
      </HOCLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
);
