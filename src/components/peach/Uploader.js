import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

const electron = window.require('electron');
const remote = electron.remote


const Uploader = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div 
        className="container" 
        align='center'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
      <div className='my-2'>
        <h5>To Upload Files...</h5>
        {isShown && (
        <div className="popup">
          ...please use the <em>Peaches</em> menu to <em>Start a New Peach</em>
        </div>
      )}
      </div>
    </div>
    </>
  )
}

export default Uploader;
