/* 
stateful component updates query string to be run in App.js via fs module,
also reruns relay compiler when the query is submitted
*/

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import fs from 'fs';
import path from 'path';
import writtenQuery from '../relay/__generated__/writtenQuery.graphql';
import '../styles/styles.css'
import aliasID from '../relay/aliasID';
import db from '../database/db';
import History from './History';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

const QueryContainer = ({loadQuery, variables}) => {
  // import the current text of the importedQuery file, slicing off the beginning boilerplate
  let initialQueryText = writtenQuery.params.text;

  const [queryText, setQueryText] = useState(initialQueryText);

  const updateQueryText = (editor, data, value) => {
    setQueryText(value);
  }

  const submitQuery = () => {
    // file boilerplate
    const queryFileStart = 'import graphql from \'graphql\'\;\nexport default graphql`';
    const queryFileEnd = '`;';
    const fullQueryText = aliasID(queryFileStart + queryText + queryFileEnd);
    fs.writeFileSync(path.resolve('./src/relay/written.js'), fullQueryText);
    // db.add();
    execSync('npm run relay', { encoding: 'utf-8' });
  }

  return (
    <Container>
      <div>
        <History 
          setQueryText={setQueryText}
          submitQuery={submitQuery}/>
        {/* <textarea type="text" rows="24" value={queryText} onChange={updateQueryText} placeholder="Enter Query Here"  className='my-2 _queries'></textarea> */}
        <ControlledEditor
            onBeforeChange={updateQueryText}
            value={queryText}
            className='code-mirror-wrapper'
            options={{
                lineWrapping: true,
                lint: true,
                mode: 'javascript',
                lineNumbers: true,
                theme: 'default height35rem readonly',
            }}
            />
        <Button 
          onClick={() => submitQuery()} 
          type='submit' 
          variant='secondary' 
          className='mb-3'
          >
          Submit Query
        </Button>
      </div>
    </Container>
  );
}

export default QueryContainer;