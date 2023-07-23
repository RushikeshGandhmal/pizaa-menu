import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <h1>Hello React!</h1>;

const pizaa = () => {
  <div>
    <img src="./piz" alt="" />
    <h1></h1>
    <p></p>
  </div>;
};

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
