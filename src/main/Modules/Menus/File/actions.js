const { dialog, BrowserWindow } = require('electron');

const openFile = () => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif', 'psd', 'xfc'] },
    ],
  }, (filepath) => {
    mainWindow.webContents.send('file-readed', filepath[0]);
  });
};

module.exports = {
  openFile,
};

