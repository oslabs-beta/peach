import { useLazyLoadQuery } from 'react-relay';
import React, { useState, useEffect } from 'react';
import importedQuery from './importedQuery';

// hooks must be called inside a function component

const QueryModule = () => {
    const [response, setResponse] = useState('');

    
    let data = useLazyLoadQuery(
        importedQuery,
        {id: 15125}
    );

    useEffect(() => {
        setResponse(prev => {
            return data;
        })
    }, [data])
    return (
        <h1>
            {JSON.stringify(response)}
        </h1>
    );
}

export default QueryModule;