import React from 'react';
import styled from 'styled-components';
import CustomerImage from './CustomerImage.jsx';

const Header = styled.div`
  background: linear-gradient(#f4f4f4, #e0e0e0);
  box-shadow: inset 0px -1px 1px 0px rgb(0,0,0,0.2);
  height:40px;
`;

const StyledImageModal = styled.div`
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  width: 600px;
  position: fixed;
  margin: auto;
  z-index: 10;
`;

const LargeImage = styled.img`
  height:auto;
  width:200px;
  border-radius: 10px;
`;

const Thumbnail = styled(CustomerImage)`
  height: 100px;
  width: auto;
  margin-right: 5px;
`;

const StyledDim = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
`;

const ModalGallery = ({mediaList, displayImageInModal}) => {
  let customerImages = [];
  let currentNode = mediaList.head;
  while (currentNode !== null) {
    customerImages.push(
      <Thumbnail
        mediaNode={currentNode}
        displayImageInModal={displayImageInModal}
      />
    );
    currentNode = currentNode.next;
  }
  return customerImages;
};

const ModalReviews = ({productReview, mediaIndex, displayImageInModal}) => {
  //Add selected image highlight
  return (
    <div>
      <div><a 
        data-review-index={-1}
        data-media-index={-1}
        onClick={displayImageInModal}>
        View image gallery
      </a></div>
      {<LargeImage src={productReview.media[mediaIndex].url}/>}

      <div className="review">{productReview.body}</div>
      <div>
        <div>Images in this review</div>
        {
          productReview.media.map(mediaNode => 
            <Thumbnail 
              mediaNode={mediaNode}
              displayImageInModal={displayImageInModal}
            />
          )
        }
      </div>
    </div>
  );
};

const ImageModal = ({
  toggleModal, displayImageInModal, 
  mediaList, mediaIndex, productReview
}) => {
  return (
    <>
    <StyledImageModal>
      <Header>
        X
      </Header>
      {
        (mediaIndex === -1) 
        ? <ModalGallery 
          mediaList={mediaList} 
          displayImageInModal={displayImageInModal}
          />
        : <ModalReviews 
          mediaIndex={mediaIndex}
          productReview={productReview}
          toggleModal={toggleModal}
          displayImageInModal={displayImageInModal}
          />
      }
    </StyledImageModal>
    <StyledDim onClick={toggleModal}/>
    </>
  );
};

export default ImageModal;