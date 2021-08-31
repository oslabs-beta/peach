import React from 'react';
import Button from 'react-bootstrap/Button';
import uploaderHook from '../hooks/uploaderHook';
const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote;
const {dialog} = remote;
import * as fs from 'fs';


const TestUpload = () => {
  return (
    <>
    <div>
      <div>
        <div align='center'>
          <input type="text" placeholder="Please select a file" id="actual-file" disabled="disabled"/>
          <Button 
            value="Choose a file" 
            id="select-file" 
            className="secondary"
            onClick={
              () => {
                dialog.showOpenDialog(function (fileNames) {
                    if(fileNames === undefined){
                        console.log("No file selected");
                    }else{
                        document.getElementById("actual-file").value = fileNames[0];
                        uploaderHook.readFile(fileNames[0]);
                    }
                }); 
              }
            }
            >
            Select
          </Button>
        </div>
        <br /><br />
        <textarea id="content-editor" rows="10"></textarea><br /><br />
        <Button 
          id="save-changes" 
          value="Save changes"
          onClick={
            () => {
              var actualFilePath = document.getElementById("actual-file").value;
              
              if(actualFilePath){
                uploaderHook.saveChanges(actualFilePath,document.getElementById('content-editor').value);
              }else{
                  alert("Please select a file first");
              }
            }
          }
          >
          Save changes
        </Button>
        <Button 
          id="delete-file" 
          value="Delete file"
          onClick={
            () => {
              var actualFilePath = document.getElementById("actual-file").value;
              
              if(actualFilePath){
                  uploaderHook.deleteFile(actualFilePath);
                  document.getElementById("actual-file").value = "";
                  document.getElementById("content-editor").value = "";
              }else{
                  alert("Please select a file first");
              }
            }
          }
          >
          Delete file
        </Button>
      </div>
      <hr />
      <div align='center'>
        <p>
          The file content will be the same as the editor.
        </p>
        <Button 
          value="Choose a file" 
          id="create-new-file"
          onClick={
            () =>{
              var content = document.getElementById("content-editor").value;
              
              dialog.showSaveDialog(function (fileName) {
                  if (fileName === undefined){
                      console.log("You didn't save the file");
                      return;
                  }
                  
                  fs.writeFile(fileName, content, function (err) {
                      if(err){
                          alert("An error ocurred creating the file "+ err.message)
                      }
                      
                      alert("The file has been succesfully saved");
                  });
              }); 
            }
          }  
          >
          Create a new File
        </Button>
      </div>
    </div>
    </>
  )
}

export default TestUpload;
