/*
functional component renders a selection of loaded queries 
and populates the QueryContainer with the selected queries text
*/ 

import React, { useState, useEffect } from 'react';
import * as importedQueries from '../relay/__generated__';
import Dropdown from 'react-dropdown';

const QuerySelector = ({setQueryText}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const initialOptions = [];
        for (let query in importedQueries) {
            const option = {};
            option.label = importedQueries[query].params.text;
            option.value = option.label;
            initialOptions.push(option);
        }
        setOptions(initialOptions);
    }, []);
    

    return (
        <Dropdown 
            placeholder="Loaded Queries"
            options={options}
            defaultOption={''}
            onChange={(e) => setQueryText(e.value)}
        />
    )
}

export default QuerySelector;