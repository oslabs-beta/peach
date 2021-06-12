/* 
stateless component renders query response data passed from App.js 
*/ 

import React, {Suspense} from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css';
import NewComp from './NewComp';


const ResponseDisplay = ({response, initialQueryReference, loadQuery, queryToLoad}) => {

  //Stringifies result and removes double quotes and 
  const format = (response) => {
    const output = JSON.stringify(response, null, 2);
    return output.replace(/"/g, '');
  }
  
  return (
    <Container className='response-container'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>
          <pre className='_responseDisplay'>{response ? format(response) : ''}</pre>
          <button onClick={() => loadQuery({id: 15125})}>click to load</button>
          <Suspense fallback="Loading...">
            {initialQueryReference != null ? 
            <NewComp 
              initialQueryReference={initialQueryReference}
              queryToLoad={queryToLoad}></NewComp> : null}
          </Suspense>
          
      </div>
    </Container>
  );
};

export default ResponseDisplay;