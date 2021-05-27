import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styles/styles.css'


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
        <textarea type="text" rows="24" value={query} onChange={updateQuery} placeholder="Enter Query Here"  className='my-2 _queries'></textarea>
        
        <Button onClick={submitQuery}  type='submit' variant='secondary' className='mb-3'>Submit Query</Button>
      </div>
    </Container>
  );
}

export default QueryContainer;