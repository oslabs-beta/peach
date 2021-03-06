import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/uploader.css";

const electron = window.require('electron');
const remote = electron.remote

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

const Uploader = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div 
        className="container2" 
        align='center'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
      <div className='my-2'>
        <h6>To Upload Files...</h6>
        {isShown && (
        <div className="popup">
          ...please use the <em>Peaches</em> menu to <em><br />
          Start a New Peach</em>. Then &nbsp;&nbsp;
          <Button 
            onClick={() => execSync('npm run relay', { encoding: 'utf-8' })} 
            type='submit' 
            variant='danger' 
            size="sm"
            >
            Restart Relay
        </Button>
        </div>
      )}
      </div>
    </div>
    </>
  )
}

export default Uploader;
