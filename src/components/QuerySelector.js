/*
functional component renders a selection of loaded queries 
and populates the QueryContainer with the selected queries text
*/ 

import React, { useState, useEffect } from 'react';
// import * as importedQueries from '../relay/__generated__';
import QueryButton from './QueryButton';

const QuerySelector = ({setLoadedQuery, importedQueries}) => {
    
    const [queryButtons, setQueryButtons] = useState([]);

    console.log(importedQueries)
    useEffect(() => {
        const queryButtonDetails = [];
        for (let query in importedQueries) {
            queryButtonDetails.push(importedQueries[query]);
        }
        setQueryButtons(queryButtonDetails);
    }, []);
    

    return (
        <div>
            {queryButtons.map(query => {
                return (
                    <QueryButton
                        query={query}
                        key={query.hash}
                        setLoadedQuery={setLoadedQuery}
                    />
                )
            })}
        </div>
    )
}

export default QuerySelector;