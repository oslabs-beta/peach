import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {
    const { variables, setVariables } = props;

    const handleChange = (editor, data, value) => {
        setVariables(value)
    }
    return (
        <div className='editor-container'>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={variables}
            className='code-mirror-wrapper'
            options={{
                lineWrapping: true,
                lint: true,
                mode: 'javascript',
                lineNumbers: true,
                indentUnit: 2,
                smartIndent: true,
            }}
            />


        </div>
    )
}
