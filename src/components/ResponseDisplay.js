import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css'


const ResponseDisplay = (props) => {

  //Stringifies result and removes double quotes.
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
          <pre className='_responseDisplay'>{props.responseData ? format(props.responseData) : ''}</pre>
      </div>
    </Container>
  );
};

export default ResponseDisplay;