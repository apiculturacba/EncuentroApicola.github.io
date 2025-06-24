import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Este es el router especial para GitHub Pages
import { Router } from "wouter";
import { createHashHistory } from "wouter/history";

// Le decimos a Wouter que use el "modo seguro"
const hashHistory = createHashHistory();

// Así se inicia tu app correctamente
createRoot(document.getElementById("root")!).render(
  <Router history={hashHistory}>
    <App />
  </Router>
);
