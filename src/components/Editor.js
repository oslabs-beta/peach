import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {
    const { language, value, onChange } = props;

    const handleChange = (editor, data, value) => {
        onChange(value);
    }
    return (
        <div className='editor-container'>
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
        </div>
    )
};
