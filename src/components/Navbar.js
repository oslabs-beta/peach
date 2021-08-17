import React from 'react';
import './../styles/App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <div className='_banner' >
      <div>
        <Button size='sm' variant='dark' disabled>
          ⇧ Peach Mode
        </Button>
      </div>         
      <div>
        <h5>
          PeachQE - Electron App
        </h5>
      </div>         
      <div>
        <Link
          activeClass="active"
          to="AppRelay"
          spy={true}
          isDynamic={true}
          smooth={true}
          offset={70}
          duration={100}
        >
          <Button size='sm' variant='warning' >
            Relay Proper ⇩
          </Button>
        </Link>
      </div>         
  </div>
  )
};

export default Navbar;