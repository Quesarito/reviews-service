import React from 'react';
import modalStyles from './stylesModal.css';
import reviewStyles from '../reviews/stylesReviews.css';
import {formatDate, prefaceURL} from '../../helpers';
import {FiveStarsSmall} from '../styled_components/StyledComponents.jsx';
import {CustomerImage} from '../customer_images/CustomerImage.jsx';

const LargeImage = ({src, currentNode, displayImageInModal}) => {
  let image = {
    backgroundImage: `url('${src}')`
  };
  return (
    <div className={modalStyles.largeImage}
      style={image}>
      {
        (currentNode.prev === null) ? <div className={modalStyles.toPrevImage}/>
        : <div className={`${modalStyles.toPrevImage} ${modalStyles.arrowWrapper}`}
          data-review-index={currentNode.prev.reviewIndex}
          data-media-index={currentNode.prev.index}
          onClick={displayImageInModal}>
          <div className={modalStyles.arrow}></div>
        </div>
      }
      {
        (currentNode.next === null) ? <div className={modalStyles.toNextImage}/>
        : <div className={`${modalStyles.toNextImage} ${modalStyles.arrowWrapper}`}
          data-review-index={currentNode.next.reviewIndex}
          data-media-index={currentNode.next.index}
          onClick={displayImageInModal}>
          <div className={modalStyles.arrow}></div>
        </div>
      }
    </div>
  );
};

const ModalReview = ({productReview, mediaIndex, displayImageInModal}) => {
    let currentNode = productReview.media[mediaIndex];
    return (
      <>
        <div className={modalStyles.toGalleryWrapper}
          data-review-index={-1}
          data-media-index={-1}
          onClick={displayImageInModal}>
          <div className={modalStyles.toGallery}></div>
          View Image Gallery
        </div>
  
        <div className={modalStyles.reviewWrapper}>
          <LargeImage src={prefaceURL(currentNode.url)} 
            currentNode={currentNode} 
            displayImageInModal={displayImageInModal}/>
  
          <div className={modalStyles.review}>
            <div className={modalStyles.productName}>{productReview.productName}</div>
            <div className={reviewStyles.headline}>
              <FiveStarsSmall rating={productReview.stars}/>
              <span>{productReview.headline}</span>
            </div>
            <div className={modalStyles.byline}>By {productReview.username} on {formatDate(productReview.posted)}</div>
            <div className={reviewStyles.body} dangerouslySetInnerHTML={{__html: productReview.body}}></div>
  
            <div>
              <div className={modalStyles.imagesHeader}>Images in this review</div>
              <div className={modalStyles.reviewGallery}>
                {
                  productReview.media.map(mediaNode => {
                    let className = (mediaNode.index === mediaIndex) ? modalStyles.selected : '';
                    return (
                      <CustomerImage 
                        mediaNode={mediaNode}
                        displayImageInModal={displayImageInModal}
                        className={className}
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ModalReview;