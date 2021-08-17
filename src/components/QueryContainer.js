/* 
stateful component updates query string to be run in App.js via fs module,
also reruns relay compiler when the query is submitted
*/

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import fs from 'fs';
import '../styles/styles.css'
import History from './History';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const QueryContainer = ({submitTypedQuery, query, setQuery}) => {

  const updateQueryText = (editor, data, value) => {
    setQuery(value);
  }

  return (
    <Container>
      <div>
        <History 
          setQuery={setQuery}
        />
        <ControlledEditor
          onBeforeChange={updateQueryText}
          value={query}
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
          onClick={() => submitTypedQuery()} 
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