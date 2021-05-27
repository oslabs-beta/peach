import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './ResponseDisplay.css'


const ResponseDisplay = (props) => {

  //Intended to remove double quotes from stringified query result.
  const format = (response) => {
    return response.replaceAll('"', '');
  }
  

  return (
    <Container className='response-container'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>

          <pre align='left' style={{ fontSize: '11px' }}>{JSON.stringify(props.responseData, null, 2)}</pre>
      </div>
    </Container>
  );
};

export default ResponseDisplay;