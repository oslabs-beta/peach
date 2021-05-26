import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/PeachLogo.png';

import SchemaDisplayContainer from './components/SchemaDisplayContainer';
import ResponseDisplay from './components/ResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput.jsx'
import './components/styles.css';
import './App.css';
import fetchGraphQL from './fetchGraphQL';


const App = () => {
	const [editorLanguage, setEditorLanguage] = useState('javascript');
	const [show, setShow] = useState(null); 

	const query = `
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

// Define our query variables and values that will be used in the query request
	const variables = {
		id: 15125
	};

	useEffect(() => {
		let isMounted = true;
		fetchGraphQL(query, variables)
			.then(response => {
				if (!isMounted) {
					return;
				}
				const data = response.data;
				setShow(data.media.title.romaji);
			}).catch(error => {
				console.error(error);
			});

			return () => {
				isMounted = false;
			};
	}, [fetchGraphQL]);

	return (
		<Container  className="App" fluid>
			<div align='center' className='my-2' style={{ backgroundColor: '#d14828', height: '60px'  }}>
				<h1>PeachQL - React App</h1>
				{/* <hr /> */}
				<p>{show != null ? `Name of show is: ${show}` : "Loading..."}</p>
			</div>
			
			<Row>
				<Col xs={4}>
					<Row  className='my-2'>
						<Col>
						<Card style={{ backgroundColor: '#fbb78d', height: '400px' }}>
							<SchemaDisplayContainer/>
						</Card>	
						</Col>
					</Row>
					<Row>
						<Col>
						<Card style={{ backgroundColor: '#962d10' }}>
							<VariableInput language={editorLanguage}/>
						</Card>
						</Col>
					</Row>
				</Col>
				
				<Col xs={4} className='my-2'>
					<Card style={{ backgroundColor: '#f38b58' }}>
						<QueryContainer/>
					</Card>
				</Col>
				
				<Col xs={4} className='my-2'>
					<Card style={{ backgroundColor: '#eb8060' }}>
						<div id="ResponseDisplay">
							<ResponseDisplay />
						</div>
					</Card>
				<div className="nav-wrapper" align='center' >
					<br />
					<img src={logo} alt='Logo' width='160px' align='center' />
				</div>
				</Col>
			
			</Row>
		</Container>
	)
}

export default App
