import React from 'react';
import {StyledLink} from './StyledComponents.jsx';
import styles from './stylesCustomerImages.css';
import {CustomerImage} from './CustomerImage.jsx';

const CustomerImageList = ({mediaList, toggleModal, displayImageInModal}) => {
  let customerImages = [];
  let currentNode = mediaList.head;
  while (customerImages.length < 4 && currentNode !== null) {
    customerImages.push(
      <CustomerImage
        mediaNode={currentNode}
        displayImageInModal={displayImageInModal}
      />
    );
    currentNode = currentNode.next;
  }
  return (
    <div>
      <h3>Customer images</h3>
      <div className={styles.gallery}>
        {customerImages}
      </div>
      <StyledLink href="#" onClick={toggleModal}>See all customer images</StyledLink>
    </div>
  );
};

export default CustomerImageList;