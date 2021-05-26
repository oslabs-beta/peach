import React, { useState } from 'react';
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


const App = () => {
	const [editorLanguage, setEditorLanguage] = useState('javascript');

	return (
		<Container  className="App" fluid>
			<div align='center' className='my-2' style={{ backgroundColor: '#d14828', height: '60px'  }}>
				<h1>PeachQL - React App</h1>
				{/* <hr /> */}
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
