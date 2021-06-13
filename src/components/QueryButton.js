import React from 'react';
import db from '../database/db';
debugger;

const QueryButton = ({query, setQueryToLoad, loadQuery, variables}) =>  {

    return (
        <div>
            <button 
                style={{width: '100%'}}
                onClick={async () => {
                    await db.add();
                    setQueryToLoad(query);
                    loadQuery(JSON.parse(variables));
                }}>
                  {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;