/*
functional component renders a selection of loaded queries 
and populates the QueryContainer with the selected queries text
*/ 

import React, { useState, useEffect } from 'react';
// import * as importedQueries from '../relay/__generated__';

const QuerySelector = ({setQueryText, setLoadedQuery, importedQueries}) => {
    

    // useEffect(() => {
    //     const initialOptions = [];
    //     for (let query in importedQueries) {
    //         const option = {};
    //         option.label = importedQueries[query].params.text.slice(14, 40) + '...';
    //         option.value = importedQueries[query].params.text;
    //         initialOptions.push(option);
    //     }
    //     setOptions(initialOptions);
    // }, [importedQueries]);
    

    return (
        <button>"hello world"</button>
    )
}

export default QuerySelector;