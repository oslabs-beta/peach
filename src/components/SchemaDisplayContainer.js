/* 
stateful functional container component responsible for rendering 
as many SchemaDisplay components as the uploaded Schema require
*/ 

import React, { useState, useRef, useEffect } from 'react';
import SchemaDisplay from './SchemaDisplay';
import Container from 'react-bootstrap/Container';
import makeJsonSchema from '../relay/makeJsonSchema';
import Button from 'react-bootstrap/Button';
import SchemaSearch from './SchemaSearch';
import InputGqlSchema from './InputGqlSchema';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// calls makeJsonSchema to generate a js array of objects we can render from schema.graphql
const jsonSchema = makeJsonSchema(); 

const SchemaDisplayContainer = () => {
    // list of Schema to be rendered by SchemaDisplay
    const [focus, setFocus] = useState(0);
    const [schemaList, setSchemaList] = useState([jsonSchema]);


    //const schemaRef = useRef(nul;)
    const items = []
    // const refs = schemaList[0].reduce((acc, value) => {
    //     //console.log(value)
    //     acc[value.name] = React.createRef();
    //     return acc;
    //   }, {});
     // console.log(refs)
    for(let i = 0; i < schemaList[0].length; i++){
      items.push(
        {id: i,
        name: schemaList[0][i].name,
        key: i
        });
    }
    const handleClick = () => {
      setFocus(0)
    }
    const handleOnSearch = (string, schema) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        if(string.toLowerCase() === 'show all'){
          console.log('Triggered')
          setFocus(0)
        }

        console.log('serach', string, schema)
      }
    
      const handleOnHover = (schema) => {
        // the item hovered
        console.log(schema)
        //setFocus(schema.id)
      }
    
      const handleOnSelect = (schema) => {
        // the item selected
        //console.log('Selected', schema.id)
        // scrollIntoView({ behavior: 'smooth' })
        setFocus(schema.id)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
      let display = {}
      if(!focus){
        display = jsonSchema.map(schema => {
          //refs[schema.name].current = schema.name;
          return <SchemaDisplay
          //ref={schemaRef}
          id={schema.name} 
          key={schema.name} 
          schemaName={schema.name}
          schemaFields={schema.fields}/>
        })
      } else {
        // console.log('Testing', schemaList[98])
        // console.log('Focus Value', focus)
        // console.log('The Schema', schemaList)
        // console.log('The Focus', schemaList[focus])
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
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            //onChange={handleOnChange}
            autoFocus
          />
          <Button onClick={handleClick}  type='submit' variant='secondary' className='my-2'> Show All </Button>
          {/* <button className='my-2 _inputButton' onClick={handleClick}> Show All </button> */}
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
