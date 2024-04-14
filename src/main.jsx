import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./route/AppRouter.jsx";
import NavbarContainer from "./components/navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NextUIProvider>
        <NavbarContainer />
        <AppRouter />
      </NextUIProvider>
    </Router>
  </React.StrictMode>
);
