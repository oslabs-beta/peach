import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/styles.css'


const ResponseDisplay = (props) => {

  //Removes double quotes from stringified query result.
  const format = (response) => {
    return response.replace(/"/g, '');
  }
  

  return (
    <Container className='response-container'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>
          <pre className='_responseDisplay' align='left' style={{ fontSize: '11px' }}>{format(JSON.stringify(props.responseData, null, 2))}</pre>
      </div>
    </Container>
  );
};

export default ResponseDisplay;