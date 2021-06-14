import React from 'react';

const QueryButton = ({query, setQueryToLoad, loadQuery, variables}) =>  {

    return (
        <div>
            <button 
                style={{width: '100%'}}
                onClick={() => {
                    setQueryToLoad(query);
                    loadQuery(JSON.parse(variables));
                    //! setEditorState(query.params.text);
                    //! setQueryKey(key);
                }}>
                  {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;