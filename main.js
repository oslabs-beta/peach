const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu } = require('electron');

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
  mainWindow.on('closed', function(){
    app.quit();
  });

	 // Build menu from template
	 const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	 // Insert menu
	 Menu.setApplicationMenu(mainMenu);

  // Automatically opens DevTools
	mainWindow.on('closed', () => (mainWindow = null))
}

  // Handle add item window
  const createAddWindow = () => {
    addWindow = new BrowserWindow({
      width: 300,
      height: 225,
      title: 'Start a New Peach',
      // To remove menu from Popup
      frame: false,
      webPreferences: {
          nodeIntegration: true
      }
    });

    // To remove menu from Popup
    // addWindow.removeMenu();

    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, '/html/addWindow.html'),
      protocol: 'file:',
      slashes:true
    }));

    // ! Handle garbage collection
    addWindow.on('close', function(){
      addWindow = null;
    });
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
