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
import InputGqlSchema from './InputGqlSchema';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// calls makeJsonSchema to generate a js array of objects we can render from schema.graphql
const jsonSchema = makeJsonSchema(); 

const SchemaDisplayContainer = () => {
    // list of Schema to be rendered by SchemaDisplay
    const [schemaList, setSchemaList] = useState([jsonSchema]);
    const items = []
    const refs = schemaList[0].reduce((acc, value) => {
        //console.log(value)
        acc[value.name] = React.createRef();
        return acc;
      }, {});
      console.log(refs)
    for(let i = 0; i < schemaList[0].length; i++){
      items.push(
        {id: i,
        name: schemaList[0][i].name,
        key: i
        });
    }
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (schema) => {
        // the item selected
        console.log('Selected', schema.name)
        // document.getElementById(schema.name).scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //   })
        
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
      
      const display = jsonSchema.map(schema => {
        refs[schema.name].current = schema.name;
        return <SchemaDisplay
        id={schema.name} 
        key={schema.name} 
        schemaName={schema.name}
        schemaFields={schema.fields}/>
    })

    return (
        <Container fluid>
            <h1>Schema Search</h1>
            <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
            <InputGqlSchema className='mb-1' />
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
