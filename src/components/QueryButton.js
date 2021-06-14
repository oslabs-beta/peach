import React from 'react';

const QueryButton = ({query, setQueryToLoad, loadQuery, variables, setEditorState}) =>  {

    return (
        <div>
            <button 
                style={{width: '100%'}}
                onClick={() => {
                    setQueryToLoad(query);
                    loadQuery(JSON.parse(variables));
                    setEditorState(query.params.text);
                }}>
                  {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;