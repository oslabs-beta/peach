import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';

const fs = require('fs');

const newSchemaUrl = 'newSchema.graphql';

// Check if the file exists in the current directory, and if it is readable.
fs.access(newSchemaUrl, fs.constants.F_OK | fs.constants.R_OK, (err) => {
  if (!newSchemaUrl) console.log('Unsuccesful operation, can\'t find the file ', newFile)
  if (err) {
      return(
          `${newSchemaUrl} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`
          );
  } else {
      return `${newSchemaUrl} exists, and it is readable`;
  }
});

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  return (
    <Container fluid>
      <div className="_inputSchemaUrl">
        <Button 
          // onClick={updateSchemaUrl} 
          onClick={openModal}
          size='sm' 
          variant='success' 
          className='my-2'
          >
          Import a new Schema
        </Button> &nbsp;
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div className='_downloadedSchema'> {newFile} </div>
    </Container>
  )
}

export default InputGqlSchema;
