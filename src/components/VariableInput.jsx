import React, { useState } from 'react';
import '../styles/styles.css';

const VariableInput = props => {
    const [state, setState] = useState('');

    return (
        <div>
            <h1>Variable Input</h1>
            <Editor
            language='javascript'
            value = {state}
            onChange={setState}
            />
        </div>
    );
};

export default VariableInput