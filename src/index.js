import React, { StrictMode } from "react";
import ReactDOM  from "react-dom/client";
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
        <App/>
)