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
      // icon: `../assets/icons/png/icon.png`,
      // To remove menu from Popup
      // frame: false,
      webPreferences: {
          nodeIntegration: true,
          enableRemoteModule:true,
      }
    });
    // To remove menu from Popup
    // addWindow.removeMenu();

    // TODO To serve static html files
    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../html/peachWindow.html'),
      protocol: 'file:',
      slashes:true
    }));

    // let indexPath

    // // check for development mode options
    // if (isDev && process.argv.indexOf('--noDevServer') === -1) {
    //   indexPath = url.format({
    //     protocol: 'http:',
    //     host: 'localhost:8080',
    //     pathname: '/peach',
    //     slashes: true,
    //   })
    // } else {
    //   indexPath = url.format({
    //     // use 'file:' for static html below
    //     protocol: 'http:',
    //     pathname: path.join(__dirname, 'dist', '/peach'),
    //     slashes: true,
    //   })
    // }

    // addWindow.loadURL(indexPath) //indexPath is the original

    // ! Handle garbage collection
    // addWindow.on('close', function(){
    //   addWindow = null;
    // });
  }
// To create a Custom Menu:
//   app.whenReady().then(()=>{
//     createAddWindow()
//         const template = [
//                 {
//                       label:'Open Google',
//                       click: function(){
//                                 let win = new BrowserWindow({width:500,height:200})
//                                 win.loadURL('https://www.google.com')
//                             }
//                 },
//                 {
//                       label:'View',
//                 },
//                 {
//                       label:'options',
//                       submenu:[
//                                 {role:'selectall'},
//                                 {role:'reload'}
//                             ]
//                 },
//                 {
//                       label: 'with Separator',
//                       submenu:[
//                           {role:'copy'},
//                           // creates a divider between two options
//                           {type:'separator'},
//                           {role:'paste'},
//                       ]
//                 }
//         ]
//     const menu = Menu.buildFromTemplate(template)
//     Menu.setApplicationMenu(menu)
// })

  module.exports = createAddWindow;