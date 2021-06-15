/*
entry point for the entire react application, 
also wraps the root component in RelayEnvironmentProvider 
*/ 

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './relay/RelayEnvironment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App2 from './components/peach/App2';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

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

function Home() {
    return (
      <div>
        <Switch>
          {/* If the current URL is /peach, we render the new App
              while the original is ignored */}
          <Route path="/peach">
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={"loading..."}>
                  <ErrorBoundary>
                    <App2 />
                  </ErrorBoundary>
                </Suspense>
            </RelayEnvironmentProvider>
          </Route>
  
  
          {/* If none route is specified,
              this route acts as a fallback. */}
          <Route path="/">
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={"loading..."}>
                  <ErrorBoundary>
                    <App />
                  </ErrorBoundary>
                </Suspense>
	          </RelayEnvironmentProvider>
          </Route>
        </Switch>
      </div>
    );
  }

// Now we can render our application into it
render(
  <Router>
    <Home />
  </Router>,
    document.getElementById('root'))
