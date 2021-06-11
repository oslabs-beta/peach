// This file has an OPEN DIALOGUE mock up to access the fs directly.
// We might (or not) need this later

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import logo from '../assets/PeachLogo.png';

import Navbar from '../Navbar';
// import SchemaDisplayContainer from '../SchemaDisplayContainer';
// import ResponseDisplay from '../ResponseDisplay';
// import QueryContainer from '../QueryContainer';
// import VariableInput from '../VariableInput';
const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote
const {dialog} = remote

const App2 = ()=>{
  // const [response, setResponse] = useState('');
	// const [variables, setVariables] = useState('{"id": 15125}');
		
	// formatting 'variables' string into JSON object for useLazyLoadQuery
	// function formatJSON(input) {
	// 	return JSON.parse(input);
	// }

	// update response state, only updates when data is fresh
    // useEffect(() => {
    //     setResponse(data);
    // }, [data]);

    return(
    <>
      <Container className="App2" fluid>
			<Row>
          <Col xs={12}>
            <Navbar />
          </Col>
      </Row>
        
      <Row>
          <Col xs={3}>
            <Row  className='my-2'>
              <Col>
              <Card className='_editorDisplay'>
              <h5>Editor</h5>
              </Card>	
              <Card className='_storeDisplay'>
              <h5>Store Display</h5>
              </Card>	
              </Col>
            </Row>
          </Col>
				
				  <Col xs={6} className='my-2'>
            <Card className='_storeDisplay'>
					    <h5>New Query selector</h5>
            </Card>	
					</Col>

					<Col xs={3} className='my-2'>
            <Row>
              <Col>
                <Card className='_response'>
                  <div id="ResponseDisplay">
                    {/* <ResponseDisplay responseData={response ? response : ''} /> */}
                    <h5>Response Display</h5>
                  </div>
                </Card>

                <Card className='_variableInput'>
                  <h5>Variable Input</h5>
                  {/* <VariableInput variables={variables} setVariables={setVariables}/> */}
                </Card>
              </Col>
            </Row>
				  </Col>
			
			</Row>
		</Container>

      </>
    )
}

export default App2