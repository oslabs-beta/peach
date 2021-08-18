/* 
stateful functional container component responsible for rendering 
as many SchemaDisplay components as the uploaded Schema require
*/ 

import React, { useState } from 'react';
import SchemaDisplay from './SchemaDisplay';
import Container from 'react-bootstrap/Container';
import makeJsonSchema from '../../relay/makeJsonSchema';
import Button from 'react-bootstrap/Button';
import InputGqlSchema from '../SchemaDownload/InputGqlSchema';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// calls makeJsonSchema to generate a js array of objects we can render from schema.graphql
const jsonSchema = makeJsonSchema(); 

const SchemaDisplayContainer = () => {
    const [focus, setFocus] = useState(0);
    const [schemaList, setSchemaList] = useState([jsonSchema]);
    const items = []

    for (let i = 0; i < schemaList[0].length; i++) {
      items.push({
        id: i,
        name: schemaList[0][i].name,
        key: i
      });
    }

    const handleClick = () => {
      setFocus(0)
    }

    const handleOnSearch = (string, schema) => {
        if (string.toLowerCase() === 'show all'){
          console.log('Triggered')
          setFocus(0)
        }
      }
    
      const handleOnSelect = (schema) => {
        setFocus(schema.id)
      }

      let display = {};
      if (!focus) {
        display = jsonSchema.map(schema => {
          return <SchemaDisplay
          id={schema.name} 
          key={schema.name} 
          schemaName={schema.name}
          schemaFields={schema.fields}/>
        });
      } else {
          display = <SchemaDisplay
            id={schemaList[0][focus].name} 
            key={schemaList[0][focus].name} 
            schemaName={schemaList[0][focus].name}
            schemaFields={schemaList[0][focus].fields}
          />
        };

    return (
      <Container fluid>
        <div align='center' >
        <InputGqlSchema className='mb-1' />
        <hr align='center' width='75%' />
        </div>

        <div align='center' className='mb-2'>
          <h6>Schema Search</h6>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
          />
          <Button onClick={handleClick}  type='submit' variant='secondary' className='my-2'> Show All </Button>
        </div>
        
        <div id="schema-display-container"  className='mb-4'>
          <ul style={{overflow: scroll}}>
            {display}
          </ul>
          <div className="_inputButton"></div>
        </div>
      </Container>
    )
}

export default SchemaDisplayContainer;
