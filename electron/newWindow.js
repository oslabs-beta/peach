/*
handles logic for generating a window that allows you to create a new project
currently only functions as a text box
*/ 

const path = require('path');
const url = require('url');
const { BrowserWindow } = require('electron');
const mainMenuTemplate = require('./menu');

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
      width: 800,
      height: 600,
      minHeight:400,
      minWidth:400,
      title: 'Start a New Peach',
      backgroundcolor: 'white',
      transparent: true,
      // frame: false,
      // icon: `../assets/icons/png/icon.png`,
      // To remove menu from Popup
      // frame: false,
      webPreferences: {
          nodeIntegration: true,
          enableRemoteModule:true,
      }
    });
    // To remove menu from Popup
    addWindow.removeMenu();

    // TODO To serve static html files
    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../html/peachWindow.html'),
      protocol: 'file:',
      slashes:true
    }));

    // ! Handle garbage collection
    addWindow.on('close', function(){
      addWindow = null;
    });
  }

  module.exports = createAddWindow;