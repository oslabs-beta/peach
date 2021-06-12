/* 
stateless component renders query response data passed from App.js 
*/ 

import React, {Suspense} from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css';
import Response from './Response';


const ResponseDisplay = ({initialQueryReference, queryToLoad}) => {
  
  return (
    <Container className='response-container'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>
          <Suspense fallback="Loading...">
            {initialQueryReference != null ? 
            <Response 
              initialQueryReference={initialQueryReference}
              queryToLoad={queryToLoad}>
            </Response> : null}
          </Suspense>
      </div>
    </Container>
  );
};

export default ResponseDisplay;