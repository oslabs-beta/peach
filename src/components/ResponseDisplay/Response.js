import React from 'react';
import { usePreloadedQuery } from 'react-relay';

const Response = ({queryToLoad, initialQueryReference}) => {
    let data;
    data = usePreloadedQuery(queryToLoad, initialQueryReference);
    return (
        <div>
            <pre style={{textAlign: 'left'}}>
                {data && JSON.stringify(data, null, 2).replace(/"/g, '')}
            </pre>
        </div>
    )
};

export default Response;