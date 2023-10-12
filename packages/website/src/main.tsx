import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
