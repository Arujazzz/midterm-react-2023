import React from "react";
import Main from "./components/Main";
import NavBarLeft from "./components/NavBarLeft";
import Right from "./components/Right";
import "./App.css";

const App = () => {
  return (
    <div id="container">
      <div id="fixed">
        <NavBarLeft />
      </div>
      <Main />
      <Right />
    </div>
  );
};

export default App;