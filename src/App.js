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
import './styles/App.css';

// import graphql from 'babel-plugin-relay/macro';


//useLazyLoadQuery imports
import { useLazyLoadQuery } from 'react-relay';
import writtenQuery from './relay/__generated__/writtenQuery.graphql'
import { Suspense } from 'react';


//Roland's imports:
// import * as schema from '../schema.graphql';
import { graphql } from 'graphql';
import aliasID from './relay/aliasID';
import makeJsonSchema from './relay/makeJsonSchema';
const path = require('path');


const pathToSchema = path.resolve('./schema.graphql');


const jsonSchema = makeJsonSchema();

const App = () => {

	const [queryToLoad, setQueryToLoad] = useState(writtenQuery);
	// const [response, setResponse] = useState(data);
	const [variables, setVariables] = useState('{"id": 15125}');

	//Roland's data:

	const [response1, setResonse1] = useState('');
	const [query1, setQuery1] = useState('');
	const [variables1, setVariables1] = useState('');
		
	
	// const submitQuery = () => {
  //   // file boilerplate
  //   const queryFileStart = 'import graphql from \'graphql\'\;\nexport default graphql`';
  //   const queryFileEnd = '`;';
  //   const fullQueryText = aliasID(queryFileStart + queryText + queryFileEnd);
  //   fs.writeFileSync(path.resolve('./src/relay/written.js'), fullQueryText);
  //   db.add();
  //   execSync('npm run relay', { encoding: 'utf-8' });
  // }

	const submitTypedQuery = () => {
		const queryFileStart = 'import graphql from \'graphql\'\;\nexport default graphql`';
    const queryFileEnd = '`;';
    const fullQueryText = aliasID(queryFileStart + query1 + queryFileEnd);
		graphql(pathToSchema, fullQueryText).then((result) => setResponse1(result.data));
	}
	


	// formatting 'variables' string into JSON object for useLazyLoadQuery
	function formatJSON(input) {
		return JSON.parse(input);
	}
	
	// let data = useLazyLoadQuery(
	// 	queryToLoad,
	// 	variables ? formatJSON(variables) : null
	// );

	// update response state, only updates when data is fresh
    // useEffect(() => {
    //     setResponse(data);
    // }, []);

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
							submitTypedQuery={submitTypedQuery}
							query1={query1}
							setQuery1={setQuery1}
						/>
					</Card>
				</Col>

				<Col xs={4} className='my-2'>
					<Card className='_response'>
						<div id="ResponseDisplay">
							<Suspense>
								<WrittenResponseDisplay 
									response={response1}
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


