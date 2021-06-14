import React from 'react';
// import db from '../database/db';

const QueryButton = ({query, setQueryToLoad, loadQuery, variables}) =>  {

    return (
        <div>
            <button 
                style={{width: '100%'}}
                onClick={() => {
                    setQueryToLoad(query);
                    loadQuery(JSON.parse(variables));
                    // db.addQuery(query.params.text);
                }}>
                  {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;