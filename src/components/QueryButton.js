import React from 'react';
// import db from '../database/db';
import Button from 'react-bootstrap/Button';

const QueryButton = ({query, setQueryToLoad, loadQuery, variables}) =>  {

    return (
        <div>
            <Button 
                style={{width: '95%'}}
                variant="secondary"
                className="my-1"
                onClick={() => {
                    setQueryToLoad(query);
                    loadQuery(JSON.parse(variables));
                    // db.addQuery(query.params.text);
                    //! setEditorState(query.params.text);
                    //! setQueryKey(key);
                }}>
                  {query.params.text}
            </Button>
        </div>
    )
}

export default QueryButton;