import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Prism from 'prismjs';
import './styles.css';

const VariableInput = props => {
    const [content, setContent] = useState(props.content);
	const [editorLanguage, setEditorLanguage] = useState('javascript');

    const handleKeyDown = event => {
        let value = content,
        selStartPos = event.currentTarget.selectionStart;

        console.log(event.currentTarget);

        //handle 4-space indent on
        if (event.key === 'Tab') {
            value = value.valuesubstring(0, selStartPos) + '    ' + 
            value.substring(selStartPos, value.length);
            event.currentTarget.selectionStart = selStartPos + 3;
            event.currentTarget.slectionEnd =  selStartPos + 4;
            event.preventDefault();

            setContent(value)
        }
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [props.language, content]);

    return (
        <Container >
            <div className='my-2' style={{ color: 'seashell' }}>
            <h5>React code syntax highLighter</h5>
                <fieldset>
                    <p>Choose Language:</p>
                    <input type='radio' 
                    id='css' 
                    name='language' 
                    value='javascrippt'
                    checked={editorLanguage === 'markup'}
                    onChange={() => setEditorLanguage('markup')}
                    />
                    <label htmlFor='css'>&nbsp; CSS &nbsp; </label>
                    <input type='radio' 
                    id='javascript' 
                    name='language' 
                    value='javascrippt'
                    checked={editorLanguage === 'markup'}
                    onChange={() => setEditorLanguage('markup')}
                    />
                    <label htmlFor='Javascript'>&nbsp; Javascript &nbsp; </label>
                    <input type='radio' 
                    id='JSON' 
                    name='language' 
                    value='javascrippt'
                    checked={editorLanguage === 'markup'}
                    onChange={() => setEditorLanguage('markup')}
                    />
                    <label htmlFor='JSON'>&nbsp; JSON &nbsp; </label>
                </fieldset>
            </div>
            <div className='code-edit-container'  style={{ backgroundColor: 'seashell', height: '90px' }}>
                <textarea
                rows='4'
                className='code-input'
                value={content}
                onChange={handleKeyDown}
                />
                <pre className='code-output'>
                    <code className={`language-${props.language}`}>{content}</code>
                </pre>
            </div>
        </Container>
    );
};

export default VariableInput