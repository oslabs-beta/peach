import React, { useState } from 'react';
import * as importedQueries from '../../relay/__generated__';
import * as queriesToEdit from '../../relay/imported'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import importedQuery from '../relay/imported';
import fs from 'fs';
import path from 'path';
// import '../styles/styles.css'
// import aliasID from '../relay/aliasID';
// import db from '../database/db';
// import History from './History';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

//* create new list of queries
//* remove query that was selected by key
//* push new query from editor onto list
//* rewrite imported file with new list of queries 

//====================

//* Populate editor display with whole text from imported.js
//* After changes have been made the save button will rewrite the imported
//* (cont) file with the newly edited query text

// ?   useEffect(() => {
// ?    const queryList = [];
// ?     for (let query in queriesToEdit) {
// ?         queryList.push(queriesToEdit[query]);
// ?     }
// ?     setQueryButtons(queryList);
// ? }, []);

const EditorDisplay = () => {
  //const queryToEdit = editorState.params.text;
  const importedPath = path.resolve('./src/relay/imported.js')
  // const [editorState, setEditorState] = useState();
  

  // const data = fs.readFileSync('./input.txt',
  //           {encoding:'utf8', flag:'r'});
  
  //let initialEditorText = queries;
  const [ editorText, setEditorText ] = useState(fs.readFileSync(importedPath, 'utf8'));

  const updateEditorText = (editor, data, value) => {
    setEditorText(value);
  }

  const saveToImported = (newQueryText) => {
    // Take editor text
    // Write file sync to imported with current editor text
    fs.writeFileSync(path.resolve(importedPath), newQueryText);
    execSync('npm run relay', { encoding: 'utf-8' });
  }

  // fs.writeFileSync(path.resolve('./src/relay/written.js'), fullQueryText);

  return (

    <div>
      <ControlledEditor
            onBeforeChange={updateEditorText}
            value={editorText}
            className='code-mirror-wrapper _variableInputInner'
            options={{
                lineWrapping: true,
                lint: true,
                mode: {
                    name: 'javascript', 
                    json: true
                },
                lineNumbers: true,
                theme: 'default height20rem readonly',
            }}
            />
            <Button variant='success'
              onClick={() => {
              saveToImported(editorText)
            }}>Save Edited Query</Button>
      </div>
  )
};

export default EditorDisplay;

