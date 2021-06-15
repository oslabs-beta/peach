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
const fs = require('fs');
const axios = require('axios').default;


const useJsonVariables = (input) => {
	const [variables, _setVariables] = useState(input);
	const setVariables = value => {
		const parser = JSON.parse(value)
		_setVariables(parser);
	}
	return [variables, setVariables];
}

const App = () => {

	// const [queryToLoad, setQueryToLoad] = useState(writtenQuery);
	// const [response, setResponse] = useState(data);
	// const [variables, setVariables] = useState('{"id": 15125}');

	//Roland's data:

	const [response, setResponse] = useState('');
	const [query, setQuery] = useState('');
	const [variables, setVariables] = useState('');
	
	//Default query and variables to test with
	var query2 = `
	query ($id: Int) { # Define which variables will be used in the query (id)
		Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
			id
			title {
				romaji
				english
				native
			}
		}
	}
	`;
	const variables2 = {
			"id": 15125
	};
	

	// Define the config we'll need for our Api request
	const url = 'https://graphql.anilist.co',
			options = {
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
		// setVariables(JSON.parse(variables));
		fetch(url, options).then(handleResponse)
										 	 .then(handleData)
										   .catch(handleError);
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

	// formatting 'variables' string into JSON object for useLazyLoadQuery
	function formatJSON(input) {
		return JSON.parse(input);
	}

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
							submitTypedQuery={submitTypedQuery}
							query={query}
							setQuery={setQuery}
						/>
					</Card>
				</Col>

				<Col xs={4} className='my-2'>
					<Card className='_response'>
						<div id="ResponseDisplay">
							<Suspense>
								<WrittenResponseDisplay 
									response={response}
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


