import { XIcon } from '@primer/octicons-react';
import React, { useState } from 'react';

function FullScreenModal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='container'>
        <button onClick={handleOpen} className='show-btn'>Show Modal</button>
        {showModal && (
          <div className="modal-backdrop">
            <div className={`modal-content ${showModal ? 'open' : ''}`}>
              <button onClick={handleClose} className="close-btn"><XIcon/></button>
              <p className="animated-text">Modal is opened!</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FullScreenModal;
