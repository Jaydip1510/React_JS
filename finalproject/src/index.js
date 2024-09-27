import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM from 'react-dom' ને બદલે
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import "./index.css";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import context
import { RoomProvider } from "./Context/Context";

// React 18 createRoot API નો ઉપયોગ
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
