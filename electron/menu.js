const createAddWindow = require('./newWindow')
const { app } = require('electron');

const isMac = process.platform === 'darwin' ? true : false;

// Create Menu template
const mainMenuTemplate = [
  ...(isMac ? [{ role: 'appMenu' }] : []),
  {
		role: 'fileMenu'
	},
  {
    role: 'editMenu'
  },
  {
    label: 'Peaches',
    submenu: [
      {
        label: 'Start a New Peach',
        click(){
          createAddWindow();
        }
      },
      {
        label: 'Continue working with a Peach'
      }
    ]
  },
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
      { role: 'reload' },
      { role: 'forcereload' },
      { type: 'separator' },
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

module.exports = mainMenuTemplate