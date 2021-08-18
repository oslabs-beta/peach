import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import fs from 'fs';
import path from 'path';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

const EditorDisplay = ({setRenderQuerySelector}) => {

  const importedPath = path.resolve('./src/relay/imported.js')
  const [ editorText, setEditorText ] = useState(fs.readFileSync(importedPath, 'utf8'));
  const options = {
    lineWrapping: true,
    lint: true,
    mode: {
        name: 'javascript', 
        json: true
    },
    lineNumbers: true,
    theme: 'default height18rem readonly',
  };

  const updateEditorText = (editor, data, value) => {
    setEditorText(value);
  }

  const saveToImported = (newQueryText) => {
    fs.writeFileSync(path.resolve(importedPath), newQueryText);
    execSync('npm run relay', { encoding: 'utf-8' });
  }

  return (
    <div>
      <ControlledEditor
        onBeforeChange={updateEditorText} 
        value={editorText} 
        className='code-mirror-wrapper _variableInputInner' 
        options={options}>
      </ControlledEditor>
      <Button 
        variant='dark'
        className="my-1"
        onClick={() => {
        saveToImported(editorText);
        setRenderQuerySelector(false);
        }}>Save Edited Query
      </Button>
    </div>
  )
};

export default EditorDisplay;

