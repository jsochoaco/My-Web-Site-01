import Navbar from "./components/00.NavBar/Navbar"
import Proyectos from "./components/01.SobreMi/SobreMi"
import './App.css';
import {Route, Routes} from "react-router-dom"
import { useState } from "react";
function App() {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <Routes >
        <Route
        path="/"
        element= { <Proyectos/>}/>

      </Routes>
    </div>
  );
}
export default App;
