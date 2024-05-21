import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FlightProvider } from "./utils/FlightContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FlightProvider>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </FlightProvider>
  </React.StrictMode>
);
