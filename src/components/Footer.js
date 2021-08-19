import React from 'react';
import './../styles/App.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className='_footer container' id="importedMode">
      <div >
        <Link
          activeClass="active"
          to="importedMode"
          spy={true}
          isDynamic={true}
          smooth={true}
          duration={100}
        >
      <button >
        ⇧ Peach Mode
      </button>
      </Link>
      </div>         
      <div>
        <h5>
          PeachQE - Electron App
        </h5>
      </div>         
      <div>
        <button disabled>
          Relay Proper ⇩
        </button>
      </div>         
  </div>
  )
}

export default Footer

