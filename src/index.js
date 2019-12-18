import React from "react";
import ReactDOM from "react-dom";
import About from "./Components/About";
import Widget from "./Components/Widget";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Widget />
      <About />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
