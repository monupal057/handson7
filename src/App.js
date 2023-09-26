import React from 'react';
import Navbar from "./Component/Navbar"
import "./App.css";
import Routers from './Component/Routers';
function App(){
  return (
    <div>
      <Navbar/>
      <Routers/>
    </div>
  );
}
export default App;