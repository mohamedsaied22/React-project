import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry</h1>,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
