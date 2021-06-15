/*
entry point for the entire react application, 
also wraps the root component in RelayEnvironmentProvider 
*/ 

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './relay/RelayEnvironment';
import Logo from './components/Logo'
import logo from '../assets/PeachQE-3.png';

// * Just to speed up the process of decorating the App
import 'bootstrap/dist/css/bootstrap.min.css'

// ? In case we decide to operate with our own css
import './styles/App.css';
// import '../peach/styles/App.css';


/* Since we are using HtmlWebpackPlugin WITHOUT a template, 
we need to create our own root node in the body element before 
rendering into it */
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

render(
	<RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<Logo />}>
      <App />
        {/* <div align="center">
          <hr width="70%" />
        </div> */}
    </Suspense>
	</RelayEnvironmentProvider>,
    document.getElementById('root'));