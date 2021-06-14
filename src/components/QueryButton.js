import React from 'react';

const QueryButton = ({query, setQueryToLoad, loadQuery, variables, setEditorState, setQueryKey, key}) =>  {

    return (
        <div>
            <button 
                style={{width: '100%'}}
                onClick={() => {
                    setQueryToLoad(query.params.text);
                    loadQuery(JSON.parse(variables));
                    setEditorState(query);
                    setQueryKey(key);
                }}>
                  {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;