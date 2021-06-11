import React from 'react';

const QueryButton = ({query, setLoadedQuery}) =>  {
    return (
        <div>
            <button onClick={() => setLoadedQuery(query)}>
                {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;