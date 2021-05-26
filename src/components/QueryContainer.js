import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const QueryContainer = (props) => {
  const [query, setQuery] = useState('');

  const updateQuery = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    //perform GraphQl query with text contained in query state.
    //update contents of ResponseDisplay with returned value of query.
  }
  
  return (
    <Container>
      <div >
        <textarea type="text" rows="22" value={query} onChange={updateQuery} placeholder="Enter Query Here"  style={{ backgroundColor: 'seashell', width:' calc(114% - 45px)' }}  className='my-3'></textarea>
        
        <Button onClick={submitQuery}  type='submit' variant='secondary' className='mb-3'>Submit Query</Button>
      </div>
    </Container>
  );
}

export default QueryContainer;