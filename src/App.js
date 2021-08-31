/*
top-level component responsible for rendering all other major components,
*/ 

import React, { useState, Suspense } from 'react';

/* COMPONENTS */ 
import ImportedMode from './components/ImportedMode';
import Footer from './components/Footer';
import SchemaDisplayContainer from './components/SchemaDisplay/SchemaDisplayContainer';
import WrittenResponseDisplay from './components/ResponseDisplay/WrittenResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput';
import ErrorBoundary from './components/ErrorBoundary';

/* STYLES */ 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/App.css';
import './styles/styles.css';

/* UTILITIES */ 
import gqlEndpoint from './relay/gqlendpoint';
import db from './database/db';

const App = () => {
	const [response, setResponse] = useState('');
	const [query, setQuery] = useState('');
	const [variables, setVariables] = useState('');

	// Define the config we'll need for our Api request
	let url = gqlEndpoint.url;
	let options = {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
			},
			body: JSON.stringify({
					query: query,
					variables: variables
			})
	};
	
	// Make the HTTP Api request
	const submitTypedQuery = () => {
		fetch(url, options)
			.then(handleResponse)
			.then(handleData)
			.catch(handleError);
		db.addQuery(query);
	}
	
	//Helper functions for submitTypedQuery:
	function handleResponse(response) {
			return response.json().then(function (json) {
					return response.ok ? json : Promise.reject(json);
			});
	}
	function handleData(data) {
			setResponse(data.data);
	}
	function handleError(error) {
			console.error(error);
	}

	return (
		<Container className="AppRelay" fluid>

			<Row>	
				<ImportedMode className="importedMode" />
			</Row>
			
			<Row className="mt-3">
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
								submitTypedQuery={submitTypedQuery}
								query={query}
								setQuery={setQuery}
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
										response={response}
									/>
								</Suspense>
							</ErrorBoundary>
						</div>
					</Card>
				</Col>
			</Row>

			<Row id="AppRelay">
				<Col xs={12}>
					<Footer />
				</Col>
			</Row>

		</Container>
	)
}

export default App;