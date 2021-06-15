const electron = require('electron');
const remote = electron.remote
const {dialog} = remote
const ipcRenderer  = electron.ipcRenderer;
var $ = require('jquery');

var dragFile= document.getElementById("drag-file");
dragFile.addEventListener('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
  
      for (let f of e.dataTransfer.files) {
        console.log('The file(s) you dragged: ', f)
        ipcRenderer.send('ondragstart', f.path)
        }
    });

    dragFile.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });


      $('#btn').on('click', () => {
        let txtarea=$('#txtarea').val()
        ipcRenderer.send('clickedbutton', txtarea)
        // console.log('The file(s) you want to save: ', txtarea)
      }) 

      ipcRenderer.on('fileData', (event, data) => { 
        $('#txtarea').text(data); 
         })

// const closeWindow = document.getElementById('closer');
// closeWindow.addEventListener('click', () => {
//     ipcRenderer.send('close-me')
// });

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

var win = remote.BrowserWindow.getFocusedWindow();
var quit = document.querySelector("#closer");
quit.addEventListener("click", () => {
  execSync('npm run relay', { encoding: 'utf-8' });
  win.close();
});