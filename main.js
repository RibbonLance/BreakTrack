// Absolute Dependencies
const electron = require('electron');

// Relative Dependencies

// Variable Declarations
const { app } = electron;
const { BrowserWindow } = electron;

let win; // Main Window
const winSettings = {
  width: 1366,
  height: 768,
  resizable: false,
  title: 'BreakTrack',
  frame: false,
};

function createWindow() {
  win = new BrowserWindow(winSettings);
  win.loadURL(`file://${__dirname}/index.html`);
  if (process.env.ENV === 'development') {
    console.log('Development Mode!');
    win.webContents.openDevTools();
  }

  win.on('closed', () => { win = null; });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
