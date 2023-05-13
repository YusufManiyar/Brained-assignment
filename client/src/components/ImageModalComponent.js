import React, { useState } from 'react';
import './ImageModalComponent.css'

function ImageModalComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        className="small"
        src={props.imageUrl}
        onClick={handleShowDialog}
        alt=""
      />
      {isOpen && (
        <dialog
          className="dialog"
          style={{ position: 'absolute' }}
          open
          onClick={handleShowDialog}
        >
          <img
            className="image"
            src= {props.imageUrl}
            onClick={handleShowDialog}
            alt=""
          />
        </dialog>
      )}
    </div>
  );
}

export default ImageModalComponent;
