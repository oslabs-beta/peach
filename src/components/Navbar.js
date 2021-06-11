import React from 'react';
import './../styles/App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <div className='_banner' >
      <div>
      <Link to="/">
      <Button size='sm' variant='dark' >
          ⇦ Relay Proper
        </Button>
      </Link>
      </div>         
      <div>
        <h5>
          PeachQE - Electron App
        </h5>
      </div>         
      <div>
      <Link to="/peach">
        <Button size='sm' variant='warning' >
          Peach Mode ⇨
        </Button>
      </Link>
      </div>         
  </div>
  )
}

export default Navbar
