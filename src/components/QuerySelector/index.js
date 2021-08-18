/*
functional component renders a selection of loaded queries 
and populates the QueryContainer with the selected queries text
*/ 

import React, { useState, useEffect } from 'react';
import * as importedQueries from '../../relay/__generated__';
import QueryButton from './QueryButton';
import Button from 'react-bootstrap/Button';
import db from '../../database/db';

const QuerySelector = ({queryToLoad, setQueryKey, setQueryToLoad, loadQuery, variables,}) => {
  const [queryButtons, setQueryButtons] = useState([]);

  useEffect(() => {
    const queryButtonDetails = [];
    if (importedQueries){
      for (let query in importedQueries) {
        queryButtonDetails.push(importedQueries[query])
      }
    };
    setQueryButtons(queryButtonDetails || []);
    }, [queryToLoad, importedQueries]);
    
  return (
    <div className="mb-3 ">
      {queryButtons.map(query => {
        return (
          <QueryButton
            query={query}
            key={query.hash}
            setQueryToLoad={setQueryToLoad}
            loadQuery={loadQuery}
            variables={variables}
           />)
      })}
      <Button 
        className="mt-1"
        variant="dark"
        size="sm"
        onClick={() => queryButtons.forEach(query => db.addQuery(query.params.text))}
        >
        Save to History
      </Button>
    </div>
  )
};

export default QuerySelector;