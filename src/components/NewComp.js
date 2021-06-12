import React from 'react';
import { usePreloadedQuery } from 'react-relay';

const NewComp = ({queryToLoad, initialQueryReference}) => {
    const data = usePreloadedQuery(queryToLoad, initialQueryReference);
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
};

export default NewComp;