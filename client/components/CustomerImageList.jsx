import React from 'react';
import styled from 'styled-components';
import CustomerImage from './CustomerImage.jsx';

const Thumbnail = styled(CustomerImage)`
  height: 100px;
  width: auto;
  margin-right: 5px;
`;

const StyledGallery = styled.div`
  display: flex;
`;

const CustomerImageList = ({mediaList, toggleModal, displayImageInModal}) => {
  let customerImages = [];
  let currentNode = mediaList.head;
  while (customerImages.length < 4 && currentNode !== null) {
    customerImages.push(
      <Thumbnail 
        mediaNode={currentNode}
        displayImageInModal={displayImageInModal}
      />
    );
    currentNode = currentNode.next;
  }
  return (
    <div>
      <h3>Customer images</h3>
      <StyledGallery>
        {customerImages}
      </StyledGallery>
      <a href="#" onClick={toggleModal}>See all customer images</a>
    </div>
  );
};

export default CustomerImageList;