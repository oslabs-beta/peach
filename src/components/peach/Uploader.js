import React from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./upload-files.component";

const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote
const {dialog} = remote
const ipcRenderer  = electron.ipcRenderer;


const Uploader = () => {
  return (
    <>
      <div className="container" style={{ width: "400px" }}>
      <div style={{ margin: "20px" }}>
        <h5>upload Files - test</h5>
      </div>

      <UploadFiles />
    </div>
    </>
  )
}

export default Uploader;
