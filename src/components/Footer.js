import React from 'react';
import './../styles/App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='_footer mt-3' id="importedMode">
      <div >
        <Link
          activeClass="active"
          to="importedMode"
          spy={true}
          isDynamic={true}
          smooth={true}
          duration={100}
        >
      <Button size='sm' variant='dark' >
        ⇧ Peach Mode
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
          Relay Proper ⇩
        </Button>
      </div>         
  </div>
  )
}

export default Footer

