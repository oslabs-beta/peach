const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu } = require('electron');
const mainMenuTemplate = require('./electron/menu');
// const createAddWindow = require('./electron/newWindow')

let mainWindow

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
		},
	})

	let indexPath

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

app.on('ready', createMainWindow)

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

// Stop error
app.allowRendererProcessReuse = true