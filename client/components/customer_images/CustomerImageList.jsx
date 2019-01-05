import React from 'react';
import styles from './stylesCustomerImages.css';
import stylesComponents from '../styled_components/stylesComponents.css';
import {CustomerImage} from './CustomerImage.jsx';

const CustomerImageList = ({mediaList, toggleModal, displayImageInModal}) => {
  let customerImages = [];
  let currentNode = mediaList.head;
  while (customerImages.length < 4 && currentNode !== null) {
    customerImages.push(
      <CustomerImage
        key={`${currentNode.reviewIndex}-${currentNode.index}`}
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
      <a className={stylesComponents.styledLink} href="#" onClick={toggleModal}>See all customer images</a>
    </div>
  );
};

export default CustomerImageList;