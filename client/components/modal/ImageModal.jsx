import React from 'react';
import modalStyle from './stylesModal.css';
import styles from '../styled_components/stylesComponents.css';
import ModalReview from './ModalReview.jsx';
import ModalGallery from './ModalGallery.jsx';

const ImageModal = ({
  toggleModal, displayImageInModal, 
  mediaList, mediaIndex, productReview
}) => {
  return (
    <div className={modalStyle.wrapper}>
      <div className={modalStyle.window}>
        <div className={modalStyle.header}>
          <a className={styles.xWrapper}
            onClick={toggleModal}>
            <div className={styles.x}></div>
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