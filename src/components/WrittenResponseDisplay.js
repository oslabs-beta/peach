/* 
stateless component renders query response data passed from App.js
Note that this display 
*/ 

import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css';

const WrittenResponseDisplay = ({response}) => {

  //Stringifies result and removes double quotes  
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
        <pre 
          style={{textAlign: 'left'}} 
          className='_WrittenResponseDisplay'
        >
          {response ? format(response) : ''}
        </pre>          
      </div>
    </Container>
  );
};

export default WrittenResponseDisplay;