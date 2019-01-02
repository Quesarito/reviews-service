import React from 'react';
import styled from 'styled-components';
import {CustomerThumbnail} from './CustomerImage.jsx';
import {FiveStarSmall} from './FiveStar.jsx';
import {formatDate, prefaceURL} from '../helpers';
import {Sprite} from './StyledComponents.jsx';

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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

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

const ModalWindow = styled.div`
  font-family: Arial, sans-serif;
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

const LinkToImageGallery = styled(Sprite)`
  color: black;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  justify-content: flex-start;
  margin: 15px 0 0 15px;

  div {
    background-size: 500px;
    background-position: -200px -4px;
    width: 19px;
    height: 19px;
    display: inline-block;
    margin-right: 5px;
  }
`;

const LargeImage = styled.div`
  background-color: #000;
  background-image: url(${props => props.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  flex-grow: 1;
  display: flex;
  max-width: 400px;
  align-items: stretch;
  margin-right: 15px;

  div, a { /* wrapper div for sprites */
    display: none;
    opacity: 0.7;
    
     div { /* nested div for sprites */
      background-size: 800px;
      background-position-y: -1445px;
      height: 62px;
      width: 40px;    
      margin: 0 10px;
     }
  }
  
  :hover {
    div, a {
      display: flex;
    }
  }
`;

const ToPrevImage = styled(Sprite)`
  flex: 1;
  justify-content: flex-start;
  div {
    background-position-x: -6px;
  }
`;

const ToNextImage = styled(Sprite)`
  flex: 3;
  justify-content: flex-end;
  div {
    background-position-x: -80px;
  }
`;

const StyledReview = styled.div`
  font-size: 13px;
  line-height: 19px;
  width: 300px;
  flex-shrink: 0;
  overflow: scroll;

  .product-name {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .headline {
    font-weight: bold;

    div {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
  .byline {
    font-size: 12px;
  }
  .review-images {
    font-size: 17px;
    margin-bottom: 5px;
  }
`;

const Thumbnail = styled(CustomerThumbnail)`
  height: 48px;
  width: 48px;
  box-sizing: border-box;
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
  let currentNode = productReview.media[mediaIndex];
  return (
    <>
      <LinkToImageGallery
        as="a" href="#"
        data-review-index={-1}
        data-media-index={-1}
        onClick={displayImageInModal}>
        <div></div>
        View Image Gallery
      </LinkToImageGallery>

      <ModalReviewWrapper>
        <LargeImage src={prefaceURL(currentNode.url)}>
          {
            (currentNode.prev === null) ? <ToPrevImage/>
            : <ToPrevImage
              as="a" href="#"
              data-review-index={currentNode.prev.reviewIndex}
              data-media-index={currentNode.prev.index}
              onClick={displayImageInModal}>
              <div></div>
            </ToPrevImage>
          }
          {
            (currentNode.next === null) ? <ToNextImage/>
            : <ToNextImage
              as="a" href="#"
              data-review-index={currentNode.next.reviewIndex}
              data-media-index={currentNode.next.index}
              onClick={displayImageInModal}>
              <div></div>
            </ToNextImage>
          }
        </LargeImage>

        <StyledReview>
          <div className="product-name">{productReview.productName}</div>
          <div className='headline'>
            <FiveStarSmall rating={productReview.stars}/>
            <span>{productReview.headline}</span>
          </div>
          <div className="byline gray">By {productReview.username} on {formatDate(productReview.posted)}</div>
          <div dangerouslySetInnerHTML={{__html: productReview.body}}></div>

          <div>
            <div className="review-images gray">Images in this review</div>
            {
              productReview.media.map(mediaNode => {
                let className = (mediaNode.index === mediaIndex) ? 'selected-line' : '';
                return (
                  <Thumbnail 
                  mediaNode={mediaNode}
                  displayImageInModal={displayImageInModal}
                  className={className}
                  />
                );
              })
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
        <XButton as="a" href="#"
          onClick={toggleModal}>
          <div></div>
        </XButton>
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