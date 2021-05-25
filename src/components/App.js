import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/PeachLogo.png';


const App = () => {
	
	return (
		<Container>
			<div>
				<div className="nav-wrapper" align='center' >
					<br />
					<h1 className="brand-logo center" align='center' >Hello Peaches!!</h1>
					<br />
					<img src={logo} alt='Logo' width='350px' align='center' />
				</div>
			</div>
		</Container>
	)
}

export default App
