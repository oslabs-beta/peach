/* 
This file holds the main window process for Electron, rendering the desktop window of the application
*/
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu} = require('electron');
const mainMenuTemplate = require('./electron/menu');
const remote = require('electron')
const {dialog} = remote
// const createAddWindow = require('./electron/newWindow')

//***//


let mainWindow

// check for development environment
let isDev = false

if (
	process.env.NODE_ENV !== undefined &&
	process.env.NODE_ENV === 'development'
) {
	isDev = true
}

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: isDev ? 1400 : 1100,
		height: 800,
		show: false,
		backgroundcolor: 'white',
		icon: `${__dirname}/assets/icons/png/icon.png`,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule:true,
			worldSafeExecuteJavaScript: true,
		},
	})

	let indexPath

	// check for development mode options
	if (isDev && process.argv.indexOf('--noDevServer') === -1) {
		indexPath = url.format({
			protocol: 'http:',
			host: 'localhost:8080',
			pathname: 'index.html',
			slashes: true,
		})
	} else {
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'dist', 'index.html'),
			slashes: true,
		})
	}

	mainWindow.loadURL(indexPath)

	// Don't show until we are ready and loaded
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()

		// Open devtools if dev
		if (isDev) {
			const {
				default: installExtension,
				REACT_DEVELOPER_TOOLS,
			} = require('electron-devtools-installer')
			// add react dev tools
			installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
				console.log('Error loading React DevTools: ', err)
			)
			// mainWindow.webContents.openDevTools()
		}
	})

  // ! Quit app when closed
  mainWindow.on('closed', () => app.quit());
  // redundant closinf window (Mac)
  mainWindow.on('closed', () => (mainWindow = null))

	 // Build menu from template
	 const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	 // Insert menu
	 Menu.setApplicationMenu(mainMenu);

}

// must wait to load pages until the ready state has fired
app.on('ready', createMainWindow)

// it is common for apps to remain open until explicitly quit in Mac environment
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createMainWindow()
	}
})

// Stop error, note may become deprecated
app.allowRendererProcessReuse = true

// TODO electron application codes

const { ipcMain } = require('electron')
let fs = require('fs')
  

ipcMain.on('ondragstart', (event, filePath) => {
    
  readFile(filePath);

  function readFile(filepath) { 
    fs.readFile(filepath, 'utf-8', (err, data) => { 
       
       if(err){ 
          alert("An error ocurred reading the file :" + err.message) 
          return 
       } 
       
       // handle the file content 
       event.sender.send('fileData', data) 
    }) 
 } 
})



ipcMain.on('clickedbutton', (event, data) => {

	// console.log('This is the data we want to save: ', data)
  // Resolves to a Promise<Object>
  dialog.showSaveDialog({
		title: 'Select the File Path to save',
    defaultPath: path.join(__dirname, '../relay/imported/imported.js'),
    // defaultPath: path.join(__dirname, '../assets/'),
    buttonLabel: 'Save',
		filters: [
				{ 
					name: 'PeachQE - GraphQL pre-written queries', 
					extensions: ['js'] 
				}
			],
		properties: []
		}).then(file => {
			// Stating whether dialog operation was cancelled or not.
			console.log(file.canceled);
			if (!file.canceled) {
				console.log(file.filePath.toString());

			// Creating and Writing to the sample.txt file
			fs.writeFile(
				file.filePath.toString(),
				data,
				(err) => {
					if(err) {
						alert("An error ocurred updating the file"+ err.message);
						console.log(err);
						return;
					}
					console.log('Saved!');
					// alert("The file has been succesfully saved");
				})
			}
			}).catch(err => {
				console.log(err);
			});
});

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

ipcMain.on('close-me', (evt, arg) => {
  var addwindow = remote.createAddWindow()
	execSync('npm run relay', { encoding: 'utf-8' });
  addwindow.close()
})


