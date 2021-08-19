// This file has an OPEN DIALOGUE mock up to access the fs directly.
// We might (or not) need this later

/* REACT COMPONENTS */ 
import React, { useState } from 'react';
import VariableInput from '../VariableInput';
import Navbar from '../Navbar';
import QuerySelector from '../QuerySelector';
import ResponseDisplay from '../ResponseDisplay/ImportedResponseDisplay';
import EditorDisplay from '../QueryEditor';
import Uploader from './Uploader';
import StoreDisplay from '../StoreDisplay/StoreDisplay';

/* RELAY */
import { useQueryLoader } from 'react-relay';
import writtenQuery from '../../relay/__generated__/writtenQuery.graphql'

const ImportedMode = () =>{
  const [renderQuerySelector, setRenderQuerySelector] = useState(false);
  const [queryToLoad, setQueryToLoad] = useState(writtenQuery);
	const [variables, setVariables] = useState('{"id": 15125}');
  const [initialQueryReference, loadQuery, disposeQuery] = useQueryLoader(queryToLoad);

    return(
    <>
      <div className="importedMode" fluid id="importedMode"> 

        <Navbar />  

              <div className='_variableInput'>
                <VariableInput 
                  variables={variables} 
                  setVariables={setVariables}
                />
              </div>
          <div className='_uploader my-2'>  
            <Uploader />
          </div>	
              <div className='_storeDisplay mt-3'>
                <h6 className="mt-1">Store Display</h6>
                <StoreDisplay
                  queryToLoad={queryToLoad}
                  variables={variables}
                />
              </div>	
    
          <div className='_newQuerySelector' align="center">
            <h6 className="mt-1">New Query selector</h6>
          <button 
            variant="success"
            small="sm"
            className="my-1"
            style={{width: '50%', marginLeft: '25%'}}
            onClick={() => setRenderQuerySelector(true)}>
              Render Query Selector
          </button>
          {renderQuerySelector && <QuerySelector
            queryToLoad={queryToLoad}
            setQueryToLoad={setQueryToLoad}
            loadQuery={loadQuery}
            variables={variables}
          />}
          </div>	
          <div className='_editorDisplay mt-2'>
            <h6 className="mt-1">Editor</h6>
            <EditorDisplay
            setRenderQuerySelector={setRenderQuerySelector}
            />
          </div>
          <div className='_response2'>
            <div id="ResponseDisplay2">
              <ResponseDisplay
                initialQueryReference={initialQueryReference}
                queryToLoad={queryToLoad}
                variables={variables}
              />
            </div>
          </div>
		  </div>
    </>
    )
};

export default ImportedMode;