import React from 'react';
import { usePreloadedQuery } from 'react-relay';

const Response = ({queryToLoad, initialQueryReference}) => {
    const data = usePreloadedQuery(queryToLoad, initialQueryReference);
    return (
        <div>
            <pre style={{textAlign: 'left'}}>
                {data != null ? JSON.stringify(data, null, 2).replace(/"/g, '') : null}
            </pre>
        </div>
    )
};

export default Response;