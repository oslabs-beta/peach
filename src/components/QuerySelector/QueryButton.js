import React from 'react';
import Button from 'react-bootstrap/Button';

const QueryButton = ({query, setQueryToLoad, loadQuery, variables}) =>  {

    return (
        <div>
            <Button 
                style={{width: '95%'}}
                variant="secondary"
                className="_queryButton my-1"
                onClick={() => {
                    setQueryToLoad(query);
                    loadQuery(JSON.parse(variables));
                }}>
                  {query.params.text}
            </Button>
        </div>
    )
}

export default QueryButton;