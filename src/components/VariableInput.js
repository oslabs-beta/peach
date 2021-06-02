import React, { useState } from 'react';
import '../styles/styles.css';
import Editor from './Editor';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const VariableInput = props => {

    const { variables, setVariables } = props;

    const handleChange = (editor, data, value) => {
        setVariables(value);
    }

    // const handleChange2 = (e) => {
    //     setVariables(e.target.value);
    // }

    return (
        <div>
            <h1>Variable Input</h1>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={variables}
            className='code-mirror-wrapper'
            options={{
                lineWrapping: true,
                lint: true,
                mode: {
                    name: 'javascript', 
                    json: true
                },
                lineNumbers: true,
            }}
            />
        </div>
    );
};

export default VariableInput