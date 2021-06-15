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

import Navbar from './components/Navbar';
import SchemaDisplayContainer from './components/SchemaDisplayContainer';
import WrittenResponseDisplay from './components/WrittenResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

// import graphql from 'babel-plugin-relay/macro';

//useLazyLoadQuery imports
import { useLazyLoadQuery } from 'react-relay';
import writtenQuery from './relay/__generated__/writtenQuery.graphql'
import { Suspense } from 'react';

const App = () => {

	const [queryToLoad, setQueryToLoad] = useState(writtenQuery);
	const [response, setResponse] = useState(data);
	const [variables, setVariables] = useState('{"id": 15125}');
		
	// formatting 'variables' string into JSON object for useLazyLoadQuery
	function formatJSON(input) {
		return JSON.parse(input);
	}

	let data = useLazyLoadQuery(
		queryToLoad,
		variables ? formatJSON(variables) : {}
	);

	// update response state, only updates when data is fresh
    useEffect(() => {
        setResponse(data);
    }, []);

	return (
		<Container className="App" fluid>
			<Row>
				<Col xs={12}>
					<Navbar />
				</Col>
			</Row>
			
			<Row>
				<Col xs={4}>
					<Row  className='my-2'>
						<Col>
							<Card className='_schemaDisplay'>
								<ErrorBoundary>
									<SchemaDisplayContainer/>
								</ErrorBoundary>
							</Card>	
						</Col>
					</Row>
					<Row>
						<Col>
							<Card className='_variableInput'>
								<ErrorBoundary>
									<VariableInput 
										variables={variables} 
										setVariables={setVariables}
									/>
								</ErrorBoundary>
							</Card>
						</Col>
					</Row>
				</Col>
				
				<Col xs={4} className='my-2'>
					<Card className='_queryContainer'>
						<ErrorBoundary>
							<QueryContainer 
								setQueryToLoad={setQueryToLoad}
								variables={variables}
							/>
						</ErrorBoundary>
					</Card>
				</Col>

				<Col xs={4} className='my-2'>
					<Card className='_response'>
						<div id="ResponseDisplay">
							<ErrorBoundary>
								<Suspense>
									<WrittenResponseDisplay 
										response={response ? response : ''}
									/>
								</Suspense>
							</ErrorBoundary>
							
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default App;


