import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// look into useLazyQueryLoader

// figure out how to make the below line dynamic (depending on the query)
// import type {HomeTabQuery} from 'HomeTabQuery.graphql';
const {graphql, usePreloadedQuery} = require('react-relay');


const QueryContainer = (props) => {
  const [query, setQuery] = useState('');

  const updateQuery = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    // perform GraphQl query with text contained in query state.
    // update contents of ResponseDisplay with returned value of query.
    // change HomeTabQuery to be query name
    type Props = {
      queryRef: PreloadedQuery<HomeTabQuery>,
    };
    function HomeTab(props: Props) {
      const data = usePreloadedQuery<HomeTabQuery>(
        graphql`
          query HomeTabQuery($id: ID!) {
            user(id: $id) {
              name
            }
          }
        `,
        props.queryRef,
      );
    
      return (
        <h1>{data.user?.name}</h1>
      );
    }
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