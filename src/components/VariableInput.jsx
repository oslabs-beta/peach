import React, { useState } from 'react';
import '../styles/styles.css';
import Editor from './Editor';

//importing library for code editor
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const VariableInput = props => {
    const [state, setState] = useState('');

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <div>
            <h1>Variable Input</h1>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
            }}
            />
            <Editor
            language='javascript'
            value = {state}
            onChange={setState}
            />
        </div>
    );
};

export default VariableInput