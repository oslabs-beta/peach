import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styles/styles.css'

// look into useLazyQueryLoader

// figure out how to make the below line dynamic (depending on the query)
// import type {HomeTabQuery} from 'HomeTabQuery.graphql';
const {graphql, usePreloadedQuery} = require('react-relay');


const QueryContainer = (props) => {
  
  return (
    <Container>
      <div >
        <textarea type="text" rows="24" value={props.query} onChange={props.updateQuery} placeholder="Enter Query Here"  className='my-2 _queries'></textarea>
        
        <Button onClick={props.submitQuery}  type='submit' variant='secondary' className='mb-3'>Submit Query</Button>
      </div>
    </Container>
  );
}

export default QueryContainer;