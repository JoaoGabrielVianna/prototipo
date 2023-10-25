import React from "react";
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from "../../components/navbar/Navbar";

function App(){
  return(
    <>
        <main id="main_App">
          <NavBar/>
          <Outlet/>
        </main>
    </>
  )
}

export default App;