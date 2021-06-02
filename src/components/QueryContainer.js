/* 
stateful component updates query string to be run in App.js via fs module,
also reruns relay compiler when the query is submitted
*/

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import fs from 'fs';
import path from 'path';
import importedQuery from '../relay/importedQuery';
import '../styles/styles.css'
import aliasID from '../relay/aliasID';

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;

const QueryContainer = () => {
  let initialQueryText = importedQuery.params.text;
  const [queryText, setQueryText] = useState(initialQueryText);

  const updateQueryText = (e) => {
    setQueryText(e.target.value);
  }

  const submitQuery = () => {
    const queryFileStart = 'import graphql from \'graphql\'\;\nexport default graphql`';
    const queryFileEnd = '`;';
    const fullQueryText = aliasID(queryFileStart + queryText + queryFileEnd);
    fs.writeFileSync(path.resolve('./src/relay/importedQuery.js'), fullQueryText);
    
    const output = execSync('npm run relay', { encoding: 'utf-8' });
    console.log('Output was:\n', output);
  }

  return (
    <Container>
      <div >
        <textarea type="text" rows="24" value={queryText} onChange={updateQueryText} placeholder="Enter Query Here"  className='my-2 _queries'></textarea>
        
        <Button onClick={submitQuery}  type='submit' variant='secondary' className='mb-3'>Submit Query</Button>
      </div>
    </Container>
  );
}

export default QueryContainer;