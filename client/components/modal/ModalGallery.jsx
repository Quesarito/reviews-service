import React from 'react';
import styles from './stylesModal.css';
import {CustomerImage} from '../customer_images/CustomerImage.jsx';

const ModalGallery = ({mediaList, displayImageInModal}) => {
  let customerImages = [];
  let currentNode = mediaList.head;
  while (currentNode !== null) {
    customerImages.push(
      <CustomerImage
        mediaNode={currentNode}
        displayImageInModal={displayImageInModal}
      />
    );
    currentNode = currentNode.next;
  }
  return (
    <div className={styles.gallery}>
      {customerImages}
    </div>
  );
};

export default ModalGallery;