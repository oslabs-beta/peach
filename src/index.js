import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// * Just to speed up the process of decorating the App
import 'bootstrap/dist/css/bootstrap.min.css'

// ? In case we decide to operate with out won css
import './App.css';


// Since we are using HtmlWebpackPlugin WITHOUT a template, we need to create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
