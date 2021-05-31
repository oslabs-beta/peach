import React, { useState } from 'react';
import '../styles/styles.css';
import Editor from './Editor';

const VariableInput = props => {
    const { variables, setVariables } = props;

    return (
        <div>
            <h1>Variable Input</h1>
            <Editor
            variables= {variables}
            setVariables={setVariables}
            />
        </div>
    );
};

export default VariableInput