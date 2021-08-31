/* 
stateless component renders query response data passed from imported.js 
via the ImportedMode component. Note that this is not the same as the 
WrittenResponseDisplay which renders queries input into the written.js 
file via the QueryEditor
*/ 

import React, {Suspense} from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/styles.css';
import Response from './Response';

const ResponseDisplay = ({initialQueryReference, queryToLoad, variables}) => {
  
  return (
    <Container className='response-container'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>
          <Suspense fallback="Loading...">
            {initialQueryReference && (
            <Response
              initialQueryReference={initialQueryReference}
              queryToLoad={queryToLoad}
              variables={variables}>
            </Response>)}
          </Suspense>
      </div>
    </Container>
  );
};

export default ResponseDisplay;