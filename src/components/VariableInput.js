import React, { useState } from 'react';
import '../styles/styles.css';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const VariableInput = ({variables, setVariables, loadQuery}) => {


    const handleChange = (editor, data, value) => {
        setVariables(value);
        loadQuery(variables);
    }

    return (
        <div className='variable'>
            <h5>Variable Input</h5>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={variables}
            className='code-mirror-wrapper _variableInputInner'
            options={{
                lineWrapping: true,
                lint: true,
                mode: {
                    name: 'javascript', 
                    json: true
                },
                lineNumbers: true,
                theme: 'default height4rem readonly',
            }}
            />
        </div>
    );
};

export default VariableInput