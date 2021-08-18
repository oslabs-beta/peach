const fs = require('fs');

(async () => {
  const watcher = fs.watch('../../relay/imported.js');
  watcher.on('change', () => {
    console.log('changed')
  });
})();