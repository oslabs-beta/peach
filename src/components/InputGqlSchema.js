import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';

const fs = require('fs');

const downloaded = false;

const file = 'icon.png'

// ! check if the file exists in the current directory.
fs.access(file, (err) => {
  if (err) {
      console.log(`The file ${file} does not exist.`);
  } else {
      console.log("The file exists.");
  }
});

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const newSchemaUrl = downloaded ? 'newSchema.graphql' : 'Example file';

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
