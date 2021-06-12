import React from 'react';

const QueryButton = ({query, setQueryToLoad, loadQuery, initialQueryReference}) =>  {
    
    return (
        <div>
            <button 
              style={{width: '100%'}}
              onClick={() => {
                  setQueryToLoad(query);
                  }}>
                {query.params.text}
            </button>
        </div>
    )
}

export default QueryButton;