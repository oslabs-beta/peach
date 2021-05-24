const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
// ! If set to producion, Dev Tools dissapear from the Desktop menu
// uncomment th line below for production
// process.env.MODE_ENV = 'production';

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({
    webPreferences:{
      nodeIntegration: true
    }
  });
  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes:true
  }));

  // ! Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
  });

  // Handle add item window
  const createAddWindow = () => {
    addWindow = new BrowserWindow({
      width: 300,
      height:300,
      title: 'Start a New Peach',
      webPreferences: {
          nodeIntegration: true
      }
    });

    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'addWindow.html'),
      protocol: 'file:',
      slashes:true
    }));

    // ! Handle garbage collection
    addWindow.on('close', function(){
      addWindow = null;
    });
  }

// Create Menu template
const mainMenuTemplate = [
  // Each object is a dropdown
  {
    label: 'File',
    submenu: [
      {
        label: 'Start a New Peach',
        click(){
          createAddWindow();
        }
      },
      {
        label: 'Continue working with a Peach'
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];

// If OSX, add empty object to the start of menu
if (process.platform == 'darwin') {
  mainMenuTemplate.unshift({label: app.getName()});
}

// * Add developer tools option if in dev
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        role: 'reload'
      },
      {
        label: 'Toggle DevTools',
        accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}