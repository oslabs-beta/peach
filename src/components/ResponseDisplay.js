/* 
stateless component renders query response data passed from App.js 
*/ 

import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css'
import RelayEnvironment from '../relay/RelayEnvironment';


const ResponseDisplay = (props) => {

  //Stringifies result and removes double quotes and 
  const format = (response) => {
    const output = JSON.stringify(response, null, 2);
    return output.replace(/"/g, '');
  }

  const store = RelayEnvironment.getStore();
  console.log('This is the store, line 20', store);
  console.log('What line 20 looks like', store._roots.entries().next());

  return (
    <Container className='response-container'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>
          <pre className='_responseDisplay'>{props.responseData ? format(props.responseData) : ''}</pre>
      </div>
    </Container>
  );
};

export default ResponseDisplay;