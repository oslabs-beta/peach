import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);
  const [schemaName, setSchemaName] = useState('anilist.co');

  const schemaUrl = 'anilist.co';

  // effect (side effect)
  useEffect(() => {
    // Check for selected (stored) schema Name in local Storage
    let currentSchemaName = localStorage.getItem('schema-name');
    // if found set selected theme value in stat
    if (currentSchemaName) {
      setSchemaName(currentSchemaName);
    };
  }, []);

  // set theme
  const handleClick = (schema) => {
    setSchemaName(schema);
    localStorage.setItem('schema-name', schema);
    schemaUrl = schema;
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  }

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
          <div className='_downloadedSchema'> {schemaName} </div> 

        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
       
    </Container>
  )
}

export default InputGqlSchema;
