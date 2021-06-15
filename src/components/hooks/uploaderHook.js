import React from 'react';
import Button from 'react-bootstrap/Button';
const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote;
const {dialog} = remote;
import * as fs from 'fs';

const uploaderHook = () => {

function readFile(filepath) {
  fs.readFileSync(filepath, 'utf-8', function (err, data) {
      if(err){
          alert("An error ocurred reading the file :" + err.message);
          return;
      }
      
      document.getElementById("content-editor").value = data;
  });
}

function deleteFile(filepath){
  fs.exists(filepath, function(exists) {
      if(exists) {
          // File exists deletings
          fs.unlink(filepath,function(err){
              if(err){
                  alert("An error ocurred updating the file"+ err.message);
                  console.log(err);
                  return;
              }
          });
      } else {
          alert("This file doesn't exist, cannot delete");
      }
  });
}

function saveChanges(filepath,content){
  fs.writeFileSync(filepath, content, function (err) {
      if(err){
          alert("An error ocurred updating the file"+ err.message);
          console.log(err);
          return;
      }
      
      alert("The file has been succesfully saved");
  }); 
}

};


export default uploaderHook;