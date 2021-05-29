import React, { useState } from 'react';


const SchemaSearch = props => {
    const [state, setState] = useState('');
    const handleClick = (e) => {
      e.persist()
      setState = e.target.value
      return
    }
    return (
        <div>
          <h1>Schema SchemaSearch</h1>
          <textarea 
            value={state}
            onChange={setState}
            className='schemaSearch'
            ></textarea>
          <button onClick={handleClick}></button>
        </div>
    );
};

export default SchemaSearch