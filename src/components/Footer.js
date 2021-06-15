import React from 'react';
import './../styles/App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='_footer mt-3' id="App2">
      <div>
        <Link
          activeClass="active"
          to="App1"
          spy={true}
          isDynamic={true}
          smooth={true}
          duration={100}
        >
      <Button size='sm' variant='dark' >
        ⇧ Relay Proper
        </Button>
      </Link>
      </div>         
      <div>
        <h5>
          PeachQE - Electron App
        </h5>
      </div>         
      <div>
        <Button size='sm' variant='warning' disabled >
          Peach Mode ⇩
        </Button>
      </div>         
  </div>
  )
}

export default Footer
