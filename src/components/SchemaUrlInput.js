import React, { useState } from 'react';
// import gqlEndpoint from '../relay/gqlEndpoint';
import db from '../database/db';

const execSync = require('child_process').execSync;

const SchemaUrlInput = () => {
    const [schemaName, setSchemaName] = useState('give it a name!');
    const [schemaInput, setSchemaInput] = useState('write schema URL here');

    const handleNameChange = (e) => {
        setSchemaName(e.target.value);
    }

    const handleURLChange = (e) => {
        setSchemaInput(e.target.value);
    }

    const updateSchema = () => {
        // gqlEndpoint.setUrl(schemaInput);
        // execSync(`get-graphql-schema ${schemaInput} > schema.graphql`, { encoding: 'utf-8' });
        db.addURL(schemaName);
    }

    return (
        <div>
            <input onChange={handleNameChange} type="text" defaultValue={schemaName || ''}></input>
            <input onChange={handleURLChange} type="text" defaultValue={schemaInput || ''}></input>
            <button onClick={() => updateSchema(schemaInput)}>Update Schema Endpoint</button>
        </div>
    )
};

export default SchemaUrlInput;