import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Prism from 'prismjs';
import './styles.css';
import Editor from './Editor'

const VariableInput = props => {
    const [state, setState] = useState('');

    return (
        <div>
            <h1>Variable Input</h1>
            <Editor
            language='javascript'
            value = {js}
            onChange={setState}
            />
        </div>
    );
};

export default VariableInput