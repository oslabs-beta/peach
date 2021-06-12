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
import ResponseDisplay from './components/ResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput';
import QuerySelector from './components/QuerySelector';
import './styles/App.css';

// import graphql from 'babel-plugin-relay/macro';

//useLazyLoadQuery imports
import { useLazyLoadQuery, useQueryLoader, usePreloadedQuery } from 'react-relay';
// import importedQuery from './relay/imported';
import writtenQuery from './relay/__generated__/writtenQuery.graphql'
import { Suspense } from 'react';

const App = () => {

	const [queryToLoad, setQueryToLoad] = useState(writtenQuery);
	const [response, setResponse] = useState('');
	const [variables, setVariables] = useState('{"id": 15125}');
	const [initialQueryReference, loadQuery, disposeQuery] = useQueryLoader(queryToLoad);
		
	// formatting 'variables' string into JSON object for useLazyLoadQuery
	function formatJSON(input) {
		return JSON.parse(input);
	}

	let data = useLazyLoadQuery(
		queryToLoad,
		variables ? formatJSON(variables) : null
	);

	// update response state, only updates when data is fresh
    useEffect(() => {
        setResponse(data);
    }, [queryToLoad, variables]);

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
						<QueryContainer 
							setQueryToLoad={setQueryToLoad}
						/>
					</Card>
					</Col>

					<Col xs={4} className='my-2'>
					<Card className='_response'>
						<div id="ResponseDisplay">
							<Suspense>
								<ResponseDisplay 
									response={response ? response : ''}
									loadQuery={loadQuery}
									initialQueryReference={initialQueryReference}
									queryToLoad={queryToLoad}
								/>
							</Suspense>
						</div>
					</Card>
				</Col>
			
			</Row>
		</Container>
	)
}

export default App;


