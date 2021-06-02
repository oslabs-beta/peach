/* 
stateful functional container component responsible for rendering 
as many SchemaDisplay components as the uploaded Schema require
*/ 

import React, { useState } from 'react';
import SchemaDisplay from './SchemaDisplay';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import makeJsonSchema from '../relay/makeJsonSchema';
import SchemaSearch from './SchemaSearch';

const jsonSchema = makeJsonSchema(); 

const SchemaDisplayContainer = () => {
    // list of Schema to be rendered by SchemaDisplay
    const [schemaList, setSchemaList] = useState([jsonSchema]);

    //console.log(jsonSchema); 

    // input for addint additional Schema directly
    const [schemaInput, setSchemaInput] = useState('');
    
    // updateSchema checks to see if the schemaText of the schemaInput to be added already... 
    // ...exists in the schemaList and updates if not
    const updateSchemaList = () => {
        // const index = schemaList.findIndex(schema => schema.schemaText === schemaInput);
        // if (index === -1 && schemaInput !== '') {
        setSchemaList((prev) => {
            return [...prev, {schemaText: schemaInput}];
        });
        setSchemaInput('');
    }

    const updateSchemaInput = (e) => {
        setSchemaInput(e.target.value);
    }

    return (
        <Container fluid>
            <SchemaSearch schemaList={schemaList}/>
            <div id="schema-display-container"  className='my-5'>
                <ul style={{overflow: scroll}}>
                    {jsonSchema.map(schema => {
                        return <SchemaDisplay 
                        key={schema.name} 
                        schemaName={schema.name}
                        schemaFields={schema.fields}/>
                    })}
                </ul>
                <div align="center">
                <input 
                placeholder="Type in your schema..."
                type="schemaText" 
                onChange={updateSchemaInput} 
                value={schemaInput} />
                <Button onClick={updateSchemaList} size='sm' type='submit' variant='secondary' className='my-2'>
                Update Schema
                </Button>
                </div>
            </div>
        </Container>
    )
}

export default SchemaDisplayContainer;
