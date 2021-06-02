/*
handles logic for generating a window that allows you to create a new project
currently only functions as a text box
*/ 

const path = require('path');
const url = require('url');
const { BrowserWindow } = require('electron');

  // Handle add item window
  const createAddWindow = () => {
    addWindow = new BrowserWindow({
      width: 300,
      height: 255,
      title: 'Start a New Peach',
      // To remove menu from Popup
      // frame: false,
      webPreferences: {
          nodeIntegration: true
      }
    });
    // To remove menu from Popup
    addWindow.removeMenu();
    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../html/addWindow.html'),
      protocol: 'file:',
      slashes:true
    }));

    // ! Handle garbage collection
    addWindow.on('close', function(){
      addWindow = null;
    });
  }

  module.exports = createAddWindow;