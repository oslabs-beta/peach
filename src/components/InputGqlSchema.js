import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';

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
        {/* <input 
          className="_UrlInput"
          placeholder="Type in URL -> GraphQl Schema"
          type="InputGQLSchema" 
          size="42"
          // onChange={updateSchemaInput} 
          // value={schemaUrl} 
          />  */}
      </div>
    </Container>
  )
}

export default InputGqlSchema;
