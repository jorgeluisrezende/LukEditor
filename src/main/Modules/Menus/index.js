const { Menu } = require('electron');
const menuFile = require('./File');

const menuTemplate = [
  {
    label: 'File',
    submenu: menuFile,
  },
];

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;
