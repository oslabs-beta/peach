/* 
stateful component updates query string to be run in App.js via fs module,
also reruns relay compiler when the query is submitted
*/

import React from 'react';
import '../../styles/styles.css';
import History from './History';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const QueryContainer = ({submitTypedQuery, query, setQuery}) => {

  const updateQueryText = (editor, data, value) => {
    setQuery(value);
  }

  return (
    <div className="container">
      <div>
        <History 
          setQuery={setQuery}
        />
        <ControlledEditor
          onBeforeChange={updateQueryText}
          value={query}
          className='code-mirror-wrapper'
          options={{
              lineWrapping: true,
              lint: true,
              mode: 'javascript',
              lineNumbers: true,
              theme: 'default height35rem readonly',
          }}
        />
        <button 
          onClick={() => submitTypedQuery()} 
          type='submit' 
          >
          Submit Query
        </button>
      </div>
    </div>
  );
}

export default QueryContainer;