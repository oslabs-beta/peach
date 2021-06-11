import React from 'react';

const QueryButton = ({query, setLoadedQuery}) =>  {
    return (
        <div>
            <button 
              style={{width: '100%'}}
              onClick={() => setLoadedQuery(query)}>
                {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;