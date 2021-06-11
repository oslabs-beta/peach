import React from 'react';
import './../styles/App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='_banner' >         
      <h4>
        <Link to="/">Relay Proper</Link> - <em>PeachQE - Electron App</em> - <Link to="/peach">Peach Mode</Link>
      </h4> 
  </div>
  )
}

export default Navbar
