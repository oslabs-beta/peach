import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import logo from '../assets/PeachLogo.png';

import SchemaDisplayContainer from './components/SchemaDisplayContainer';
import ResponseDisplay from './components/ResponseDisplay';
import QueryContainer from './components/QueryContainer';
import VariableInput from './components/VariableInput.jsx';
import './styles/App.css';

import graphql from 'babel-plugin-relay/macro';

import { 
	loadQuery,
	usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnvironment';

const { Suspense } = React;

// ! important note: the name of the query (after the keyword query in query string)
const AnimeQuery = graphql`
	query AppQuery($id: Int) { # Define which variables will be used in the query (id)
		Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
			_id: id
			title {
				romaji
				english
				native
			}
		}
	}
`;

const preloadedQuery = loadQuery(RelayEnvironment, AnimeQuery, {
	id: '15125',
});


const App = (props) => {
	const [editorLanguage, setEditorLanguage] = useState('javascript');

	const data = usePreloadedQuery(AnimeQuery, preloadedQuery);


	return (
		<Container className="App" fluid>
			<div className='_banner' >
				<h1>PeachQL - React App</h1>
				{/* <hr /> */}
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
							<VariableInput language={editorLanguage}/>
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
							<ResponseDisplay responseData={data} />
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
