import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import '../styles/Modal.css';
import FileDownloader from "./FileDownloader";

const Modal = ({ showModal, setShowModal}) => {
  const modalRef = useRef();

  //To bring the Modal from the top, cascade style
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  // Close the Modal with the X on the top right corner
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // Close the modal wwith 'Esc' key
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        // console.log('I pressed'); // Unnecessary console.log now!
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  
  return (
    <>
      {showModal ? (
        <div className="Background" ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
            <div className="ModalWrapper" showModal={showModal}>
              <div className="ModalContent">
                <h3>Explore different Databases</h3>
                <hr width='70%' />
                <p className="modalText">
                  Bring any url to visualize your graphQl database on our system. <br />
                  Make sure to download your schema to <br />
                  the same directory your app is installed <br />
                  (aka. your PEACH folder)  
                </p>
                <h6 className="red">Please confirm you want to overwrite the existing file.</h6>
                <FileDownloader /> 
                <button className='mt-4' onClick={() => setShowModal(prev => !prev)}>Close</button>
                <MdClose className='CloseModalButton' />
              </div>
              <div className="CloseModalButton"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  )
};

export default Modal;
