import React from 'react';
import styled from 'styled-components';
import {Sprite} from '../styled_components/StyledComponents.jsx';
import modalStyle from './stylesModal.css';
import ModalReview from './ModalReview.jsx';
import ModalGallery from './ModalGallery.jsx';

const XButton = styled(Sprite)`
  height: 28px;
  width: 28px;
  margin-right: 5px;
  opacity: 0.5;

  :hover {
    opacity: 0.8;
  }

  :focus {
    box-shadow: 0 0 5px 1px rgb(230, 115, 34, 0.7);
    border: solid 1px rgb(230, 115, 34);
    opacity: 0.8;
  }

  div {
    background-position: -293px 0px;
    height: 19px;
    width: 19px;
  }
`;

const ImageModal = ({
  toggleModal, displayImageInModal, 
  mediaList, mediaIndex, productReview
}) => {
  return (
    <div className={modalStyle.wrapper}>
    <div className={modalStyle.window}>
      <div className={modalStyle.header}>
        <a className={modalStyle.xWrapper}
          onClick={toggleModal}>
          <div className={modalStyle.x}></div>
        </a>
      </div>
      {
        (mediaIndex === -1) 
        ? <ModalGallery 
          mediaList={mediaList} 
          displayImageInModal={displayImageInModal}
          />
        : <ModalReview 
          mediaIndex={mediaIndex}
          productReview={productReview}
          toggleModal={toggleModal}
          displayImageInModal={displayImageInModal}
          />
      }
    </div>
    <div className={modalStyle.dim} onClick={toggleModal}/>
    </div>
  );
};

export default ImageModal;