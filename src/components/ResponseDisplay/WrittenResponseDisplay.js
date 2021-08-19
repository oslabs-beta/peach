/* 
stateless component renders query response data passed from App.js
*/ 

import React from 'react';
import '../../styles/styles.css';

const WrittenResponseDisplay = ({response}) => {

  //Stringifies result and removes double quotes  
  const format = (response) => {
    const output = JSON.stringify(response, null, 2);
    return output.replace(/"/g, '');
  }
  
  return (
    <div className='container'>
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
    </div>
  );
};

export default WrittenResponseDisplay;