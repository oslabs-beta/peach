const fs = require('fs');
// const { ipcRenderer } = require('electron');

(async () => {
  const watcher = fs.watch('../../relay/imported.js');
  watcher.on('change', () => {
    console.log('changed')
  });
})();