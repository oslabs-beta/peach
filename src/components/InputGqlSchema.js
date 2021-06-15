import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';
// import FileDownloader from "./FileDownloader";
import gqlEndpoint from '../relay/gqlEndpoint';
import db from '../database/db';

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);
  const [schemaName, setSchemaName] = useState(gqlEndpoint.url);

  //* Original Schema/Database used as demo
  const schemaUrl = db.getSchemaHistory()[0].name;

  // effect (side effect)
  useEffect(() => {
    // Check for selected (stored) schema Name in local Storage
    let currentSchemaName = localStorage.getItem('schema-name');
    // if found set selected schema value in <div>
    if (currentSchemaName) {
      setSchemaName(currentSchemaName);
    };
  }, [useState(schemaName)]);

  // set Schema name
  const handleClick = (schema) => {
    setSchemaName(schema);
    localStorage.setItem('schema-name', schema);
    schemaUrl = schema;
  }

  // TODO: This opens the modal
  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <Container fluid>
      <div className="_inputSchemaUrl">
        <div className="_inline">
          <Button 
            // onClick opens the modal
            onClick={openModal}
            size='sm' 
            variant='success' 
            className='mt-2'
            >
            Import a new Schema
          </Button> &nbsp;

          <div className='_downloadedSchema'> {schemaName} </div> 
        
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
       
    </Container>
  )
}

export default InputGqlSchema;
