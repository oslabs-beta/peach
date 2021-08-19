import React from 'react';
import './../styles/App.css';
import { Link, animateScroll as scroll } from "react-scroll";

// ! NTS - this appears to be virtually identical to the Footer component, and should therefore be refactored or deleted

const Navbar = () => {
  return (
    <div className='_banner' >
      <div>
        <button disabled>
          ⇧ Peach Mode
        </button>
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
          <button size='sm' variant='warning' >
            Relay Proper ⇩
          </button>
        </Link>
      </div>         
  </div>
  )
};

export default Navbar;