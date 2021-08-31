import React, { useState } from 'react';
import gqlEndpoint from '../../relay/gqlEndpoint';
import db from '../../database/db';

const execSync = require('child_process').execSync;

const SchemaUrlInput = () => {
    const [schemaName, setSchemaName] = useState('give it a name!');
    const [schemaURL, setschemaURL] = useState('write schema URL here');

    const handleNameChange = (e) => {
        setSchemaName(e.target.value);
    }

    const handleURLChange = (e) => {
        setschemaURL(e.target.value);
    }

    const addSchema = (schemaName, schemaURL) => {
        gqlEndpoint.setUrl(schemaURL);
        execSync(`get-graphql-schema ${schemaURL} > schema.graphql`, { encoding: 'utf-8' });
        db.addURL(schemaName);
    }

    return (
        <div className="schemaURLInput mb-1">
            <input onChange={handleNameChange} type="text" defaultValue={schemaName || ''}></input> <input onChange={handleURLChange} type="text" defaultValue={schemaURL || ''}></input> <button onClick={() => addSchema(schemaName, schemaURL)}>Add Schema Endpoint</button>
        </div>
    )
};

export default SchemaUrlInput;