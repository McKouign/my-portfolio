import React from "react";
import "./App.css";
import { NavBar } from "./Components/Navbar";
import { Banner } from "./Components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
