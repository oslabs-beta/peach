import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import fs from 'fs';
import path from 'path';
import '../styles/styles.css'

// look into useLazyQueryLoader

// figure out how to make the below line dynamic (depending on the query)
// import type {HomeTabQuery} from 'HomeTabQuery.graphql';
const {graphql, usePreloadedQuery} = require('react-relay');

//require in exec to run terminal commands in js:
const execSync = require('child_process').execSync;


const QueryContainer = () => {
  const [queryText, setQueryText] = useState('');

  const updateQueryText = (e) => {
    setQueryText(e.target.value);
  }

  const submitQuery = () => {
    const queryFileStart = 'import graphql from \'graphql\'\;\nexport default graphql`';
    const queryFileEnd = '`;';
    fs.writeFileSync(path.resolve('./src/relay/importedQuery.js'), queryFileStart + queryText + queryFileEnd);
    

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