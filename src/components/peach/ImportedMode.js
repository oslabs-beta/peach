// This file has an OPEN DIALOGUE mock up to access the fs directly.
// We might (or not) need this later

import React, { useState, useEffect } from 'react';
import VariableInput from '../VariableInput';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Navbar from '../Navbar';
import QuerySelector from '../QuerySelector';
import { useQueryLoader } from 'react-relay';
import writtenQuery from '../../relay/__generated__/writtenQuery.graphql'
import ResponseDisplay from '../ResponseDisplay';
import EditorDisplay from './EditorDisplay';
import Uploader from './Uploader';
import StoreDisplay from '../StoreDisplay';

const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote
const {dialog} = remote
const ipcRenderer  = electron.ipcRenderer;

const ImportedMode = () =>{
  const [renderQuerySelector, setRenderQuerySelector] = useState(false);

  const [queryToLoad, setQueryToLoad] = useState(writtenQuery);
	const [variables, setVariables] = useState('{"id": 15125}');
  const [querySelection, setQuerySelection] = useState(null);

  const [
    initialQueryReference, 
    loadQuery, 
    disposeQuery] = useQueryLoader(queryToLoad);

    return(
    <>
      <Container className="importedMode" fluid id="importedMode"> 

      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>   

      <Row className="containerApp2 mt-2" >
        <Col xs={3}>
          <Row  className='my-2'>
            <Col>
            <Card className='_variableInput'>
                <VariableInput 
                  variables={variables} 
                  setVariables={setVariables}
                />
              </Card>
          <Card className='_uploader my-2'>  
            <Uploader />
          </Card>	
              <Card className='_storeDisplay mt-3'>
                <h6 className="mt-1">Store Display</h6>
                <StoreDisplay
                  queryToLoad={queryToLoad}
                  variables={variables}
                />
              </Card>	
            </Col>
          </Row>
        </Col>
        <Col xs={6} className='my-2'>
        <Card className='_newQuerySelector' align="center">
            <h6 className="mt-1">New Query selector</h6>
          <Button 
            variant="success"
            small="sm"
            className="my-1"
            style={{width: '50%', marginLeft: '25%'}}
            onClick={() => setRenderQuerySelector(true)}>Render Query Selector</Button>
            {(renderQuerySelector) ?
            <QuerySelector
              queryToLoad={queryToLoad}
              setQueryToLoad={setQueryToLoad}
              loadQuery={loadQuery}
              variables={variables}
            /> 
          : null}
          </Card>	
          <Card className='_editorDisplay mt-2'>
              <h6 className="mt-1">Editor</h6>
              <EditorDisplay
              setRenderQuerySelector={setRenderQuerySelector}
              />
              </Card>	
          
          
        </Col>

        <Col xs={3} className='my-2'>

              <Card className='_response2'>
                <div id="ResponseDisplay2">
                  <ResponseDisplay
                    initialQueryReference={initialQueryReference}
                    queryToLoad={queryToLoad}
                    variables={variables}
                  />
                </div>
              </Card>
              
        </Col>
			</Row>
		  </Container>
    </>
    )
};

export default ImportedMode;