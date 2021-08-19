import React, { useState } from 'react';
import Modal from './Modal';
import gqlEndpoint from '../../relay/gqlEndpoint';

const InputGqlSchema = () => {
  const [showModal, setShowModal] = useState(false);
  const [schemaName, setSchemaName] = useState(gqlEndpoint.url);


  // TODO: This opens the modal
  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <div fluid>
      <div className="_inputSchemaUrl">
        <div className="_inline">
          <button 
            onClick={openModal}
            size='sm' 
            variant='success' 
            className='mt-2'
            >
            Import a new Schema
          </button> <br />

          <div className='_downloadedSchema'>{schemaName}</div> 
        
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
       
    </div>
  )
};

export default InputGqlSchema;
