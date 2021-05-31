import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import '../styles/Modal.css';

const Modal = ({ showModal, setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
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
                <h3>Explore your own Database</h3>
                <hr width='70%' />
                <p>Bring any url to visualize your graphQl database on our system</p>
                <button onClick={() => setShowModal(prev => !prev)}>Close me</button>
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
