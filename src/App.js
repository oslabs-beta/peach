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
import ImportedMode from './components/peach/ImportedMode';
// import logo from '../assets/PeachLogo.png';

import Footer from './components/Footer';
import SchemaDisplayContainer from './components/SchemaDisplayContainer';
import WrittenResponseDisplay from './components/WrittenResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput';
import './styles/App.css';
import './styles/styles.css';

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
		variables ? formatJSON(variables) : null
	);

	// update response state, only updates when data is fresh
    useEffect(() => {
        setResponse(data);
    }, []);

	return (
		<Container className="AppRelay" fluid>

			<Row>	
				<ImportedMode className="importedMode" />
			</Row>
			
			<Row className="my-3">
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
								<VariableInput 
									variables={variables} 
									setVariables={setVariables}
								/>
							</Card>
						</Col>
					</Row>
				</Col>
				
				<Col xs={4} className='my-2'>
					<Card className='_queryContainer'>
						<QueryContainer 
							setQueryToLoad={setQueryToLoad}
							variables={variables}
						/>
					</Card>
				</Col>

				<Col xs={4} className='my-2'>
					<Card className='_response'>
						<div id="ResponseDisplay">
							<Suspense>
								<WrittenResponseDisplay 
									response={response ? response : ''}
								/>
							</Suspense>
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


