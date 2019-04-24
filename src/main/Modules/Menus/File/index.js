const actions = require('./actions');

module.exports = [
  {
    label: 'New',
    role: 'new',
    click: actions.newFile,
    accelerator: 'CmdOrCtrl+N',
  },
  {
    label: 'Open...',
    role: 'openfile',
    click: actions.openFile,
    accelerator: 'CmdOrCtrl+O',
  },
  {
    label: 'Open Recent',
  },
  {
    type: 'separator',
  },
  {
    label: 'Save',
  },
  {
    label: 'Save As...',
  },
  {
    type: 'separator',
  },
  {
    label: 'Quit',
    role: 'quit',
  },
];

