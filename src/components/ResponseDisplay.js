import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const ResponseDisplay = () => {

  // add useState hook to add state to be dummy data
  const [responseText, setResponseText] = useState(
  `{
    "data": {
      "hero": {
        "name": "R2-D2",
          "friends": [
            {
              "name": "Luke Skywalker"
            },
            {
              "name": "Han Solo"
            },
            {
              "name": "Leia Organa"
            }
          ]
        }
      }
    }`
  );

  // const handleResponseText = () => {
  //   setResponseText();
  // };

  return (
    <Container className='my-3'>
      <div id="responseText" align='center'>
        <h4>
          Response
        </h4>
          <pre align='left' style={{ fontSize: '11px' }}> {responseText} </pre>
      </div>
    </Container>
  );
};

export default ResponseDisplay;