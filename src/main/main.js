const { app, BrowserWindow } = require('electron');
const path = require("path");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#282c34',
    center: true,
    icon: path.join(__dirname, 'mirror.png'),
  });

  const appURL = app.isPackaged ? url.pathToFileURL(path.join(__dirname, 'index.html')).href :
    "http://localhost:3000";
  win.loadURL(appURL);

  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
