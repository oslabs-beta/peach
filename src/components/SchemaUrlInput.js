import React, { useState } from 'react';
import gqlEndpoint from '../relay/gqlEndpoint';

const execSync = require('child_process').execSync;

const SchemaUrlInput = () => {
    const [schemaInput, setSchemaInput] = useState('write schema URL here');

    const handleChange = (e) => {
        setSchemaInput(e.target.value);
    }

    const updateSchema = () => {
        gqlEndpoint.setUrl(schemaInput);
        execSync(`get-graphql-schema ${schemaInput} > schema.graphql`, { encoding: 'utf-8' });
    }

    return (
        <div>
            <input onChange={handleChange} type="text" defaultValue={schemaInput || ''}></input>
            <button onClick={() => updateSchema(schemaInput)}>Update Schema Endpoint</button>
        </div>
        
    )
};

export default SchemaUrlInput;