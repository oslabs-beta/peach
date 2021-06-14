/*
handles logic for generating a window that allows you to create a new project
currently only functions as a text box
*/ 

const path = require('path');
const url = require('url');
const { BrowserWindow, dialog, app, IPCRenderer } = require('electron');
const mainMenuTemplate = require('./menu');

let fs = require('fs')

// check for development environment
let isDev = false

if (
	process.env.NODE_ENV !== undefined &&
	process.env.NODE_ENV === 'development'
) {
	isDev = true
}

  // Handle add item window
  const createAddWindow = () => {
    addWindow = new BrowserWindow({
      width: 1180,
      height: 600,
      minHeight:400,
      minWidth:400,
      title: 'Upload your own Peach',
      backgroundcolor: 'white',
      // To have rounded corners, although it doesn't work for Mac
      // transparent: true,
      // The compiler is not recognizing the icon image. Keep commented out.
      // icon: `../assets/icons/png/icon.png`,
      // To remove the entire frame from Popup
      // frame: false,
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule:true,
          worldSafeExecuteJavaScript: true,
      }
    });
    // To remove menu from Popup
    addWindow.removeMenu();

    // TODO To serve static html files
    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../html/peachWindow2.html'),
      protocol: 'file:',
      slashes:true
    }));

    // ! Handle garbage collection
    addWindow.on('close', function(){
      addWindow = null;
    });
  };

  module.exports = createAddWindow;