import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';
import fs from 'fs';
import path from 'path';

const downloaded = false;

// ! check if the file exists in the current directory.
// No need to check for the file, since we can overwrite anything we want

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const newSchemaUrl = downloaded ? 'newSchema' : 'anilist.co';

  return (
    <Container fluid>
      <div className="_inputSchemaUrl">
        <div className="_inline">
          <Button 
            // onClick={updateSchemaUrl} 
            onClick={openModal}
            size='sm' 
            variant='success' 
            className='my-2'
            >
            Import a new Schema
          </Button> &nbsp;
          <div className='_downloadedSchema'> {newSchemaUrl} </div> 

        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
       
    </Container>
  )
}

export default InputGqlSchema;
