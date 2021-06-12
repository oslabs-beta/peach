import React, { useState } from 'react';
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

const EditorDisplay = ({ queries, editorState }) => {

  let initialEditorText = queries;
  const [ editorText, setEditorText ] = useState(editorState);

  const updateEditorText = (editor, data, value) => {
    setEditorText(value);
  }

  const submitQuery = () => {
    // file boilerplate
    const queryFileStart = 'import graphql from \'graphql\'\;\nexport default graphql`query importedQueryQuery($id: Int) ';
    const queryFileEnd = '`;';
    const fullQueryText = aliasID(queryFileStart + queryText + queryFileEnd);
    fs.writeFileSync(path.resolve('../relay/imported.js'), fullQueryText);
    db.add();
  }

  return (

    <div>
      <ControlledEditor
            onBeforeChange={updateEditorText}
            value={editorState}
            className='code-mirror-wrapper _variableInputInner'
            options={{
                lineWrapping: true,
                lint: true,
                mode: {
                    name: 'javascript', 
                    json: true
                },
                lineNumbers: true,
                theme: 'default height4rem readonly',
            }}
            />
            <button>Save Edited Query</button>
      </div>
  )
};

export default EditorDisplay;

