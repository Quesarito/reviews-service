import React from 'react';
import styled from 'styled-components';
import sprites from '../styles/sprites.png';
import CustomerImage from './CustomerImage.jsx';

const ModalWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Header = styled.div`
  background: linear-gradient(#f7f7f7, #eaeaea);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.5), inset 0 -1px 0 rgba(255,255,255,.4);
  border-bottom: solid 1px #bbb;
  height:35px;
  width: 100%;
`;

const ModalWindow = styled.div`
  background-color: #fff;
  border-radius: 3px;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  margin: auto;
  z-index: 10;
`;

const ModalReviewWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  align-items: stretch;
`;

const LinkToImageGallery = styled.div`
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  margin: 15px 0 0 15px;

  div {
    background: url(${sprites}) no-repeat;
    background-position-y: -464px;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: top;
    z-index: -1;
  }
`;

const LargeImage = styled.div`
  background-color: #000;
  flex-grow: 1;
  display: flex;
  max-width: 400px;
  align-items: center;
  margin-right: 15px;

  img {
    max-height: inherit;
    max-width: 100%;
  }
`;

const StyledReview = styled.div`
  font-size: 13px;
  line-height: 19px;
  width: 300px;
  flex-shrink: 0;
  overflow: scroll;
`;

const Thumbnail = styled(CustomerImage)`
  height: 50px;
  width: 50px;
  overflow: hidden;
  margin-right: 5px;
`;

const StyledGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 15px;
  overflow: scroll;
`;

const GalleryThumbnail = styled(Thumbnail)`
  height: 170px;
  width: 170px;
  margin: 8px;
`;

const StyledDim = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
`;

const ModalGallery = ({mediaList, displayImageInModal}) => {
  let customerImages = [];
  let currentNode = mediaList.head;
  while (currentNode !== null) {
    customerImages.push(
      <GalleryThumbnail
        mediaNode={currentNode}
        displayImageInModal={displayImageInModal}
      />
    );
    currentNode = currentNode.next;
  }
  return (
    <StyledGallery>
      {customerImages}
    </StyledGallery>
  );
};

const ModalReviews = ({productReview, mediaIndex, displayImageInModal}) => {
  //Add selected image highlight
  return (
    <>
      <LinkToImageGallery
        data-review-index={-1}
        data-media-index={-1}
        onClick={displayImageInModal}>
        <div></div> View Image Gallery
      </LinkToImageGallery>

      <ModalReviewWrapper>
        <LargeImage>
          <img src={productReview.media[mediaIndex].url}/>
        </LargeImage>

        <StyledReview>
          <span>{productReview.productName}</span>
          <h3>{productReview.headline}</h3>
          <p>By {productReview.username} on {productReview.posted}</p>
          <p>{productReview.body}</p>
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
        </StyledReview>
      </ModalReviewWrapper>
    </>
  );
};

const ImageModal = ({
  toggleModal, displayImageInModal, 
  mediaList, mediaIndex, productReview
}) => {
  return (
    <ModalWrapper>
    <ModalWindow>
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
    </ModalWindow>
    <StyledDim onClick={toggleModal}/>
    </ModalWrapper>
  );
};

export default ImageModal;