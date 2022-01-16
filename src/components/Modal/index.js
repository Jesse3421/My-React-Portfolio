import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, projectCat, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/projectPhoto/${projectCat}/${index}.png`).default}
          alt="current project"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;