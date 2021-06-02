/*
Currently responsible for rendering all the major components,
imports the importedQuery and holds the data that comes back from 
useLazyLoadQuery as state, which is passed and rendered in ResponseDisplay
*/ 

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import logo from '../assets/PeachLogo.png';

import SchemaDisplayContainer from './components/SchemaDisplayContainer';
import ResponseDisplay from './components/ResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput';
import './styles/App.css';

// import graphql from 'babel-plugin-relay/macro';

//useLazyLoadQuery imports
import { useLazyLoadQuery } from 'react-relay';
import importedQuery from './relay/importedQuery';

const App = () => {
	const [response, setResponse] = useState('');
	const [variables, setVariables] = useState('{"id": 15125}');
		
	// formatting 'variables' string into JSON object for useLazyLoadQuery
	function formatJSON(input) {
		return JSON.parse(input);
	}

	let data = useLazyLoadQuery(
			importedQuery,
			formatJSON(variables)
	);

	// update response state, only updates when data is fresh
	useEffect(() => {
		setResponse(data);
}, [data]);

	return (
		<Container className="App" fluid>
			
			<div className='_banner' >
				<h1>PeachQL - React App</h1>
			</div>
			<Row>
				<Col xs={4}>
					<Row  className='my-2'>
						<Col>
						<Card className='_schemaDisplay'>
							<SchemaDisplayContainer/>
						</Card>	
						</Col>
					</Row>
					<Row>
						<Col>
						<Card className='_variableInput'>
							<VariableInput variables={variables} setVariables={setVariables}/>
						</Card>
						</Col>
					</Row>
				</Col>
				
				<Col xs={4} className='my-2'>
					<Card className='_queryContainer'>
						<QueryContainer/>
					</Card>
					</Col>

					<Col xs={4} className='my-2'>
					<Card className='_response'>
						<div id="ResponseDisplay">
							<ResponseDisplay responseData={response ? response : ''} />
						</div>
					</Card>
					{/* <div className="nav-wrapper" align='center' >
					<br />
					<img src={logo} alt='Logo' width='160px' align='center' />
					</div> */}
				</Col>
			
			</Row>
		</Container>
	)
}

export default App;


