import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';
import gqlEndpoint from '../relay/gqlEndpoint';

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);
  const [schemaName, setSchemaName] = useState(gqlEndpoint.url);


  // TODO: This opens the modal
  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <Container fluid>
      <div className="_inputSchemaUrl">
        <div className="_inline">
          <Button 
            onClick={openModal}
            size='sm' 
            variant='success' 
            className='mt-2'
            >
            Import a new Schema
          </Button> <br />

          <div className='_downloadedSchema'>{schemaName}</div> 
        
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
       
    </Container>
  )
};

export default InputGqlSchema;
