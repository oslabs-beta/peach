// This file has an OPEN DIALOGUE mock up to access the fs directly.
// We might (or not) need this later

import React from 'react';
const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote
const {dialog} = remote

const App2 = ()=>{
    return(
    <>
      <div class="nav-wrapper">
        <h2 class="brand-logo center">Hello Peaches!!</h2>
        <br />
        <br />
        <img src="../assets/PeachLogo.png" width='350px' />
      </div>
      <div id="peach"></div>
      <button onClick={()=>{
          dialog.showOpenDialog({
            title:'Open Dialogue',
                message:'First Dialog',
             filters: [
             { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
             { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
             { name: 'Custom File Type', extensions: ['as'] },
             { name: 'All Files', extensions: ['*'] }
           ]
         }
          ).then(result=>{
            shell.openPath(result.filePaths[0])
            console.log(result.filePaths[0]);
            })
        }}>
          Open Dialog to Select a file
         </button>
      </>
    )
}

export default App2