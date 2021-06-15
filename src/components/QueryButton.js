import React from 'react';
<<<<<<< HEAD
// import db from '../database/db';
=======
import Button from 'react-bootstrap/Button';
>>>>>>> dev

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
                }}>
                  {query.params.text}
            </Button>
        </div>
    )
}

export default QueryButton;