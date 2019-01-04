import React from 'react';
import styles from './stylesModal.css';
import {formatDate, prefaceURL} from '../../helpers';
import {FiveStarsSmall} from '../styled_components/StyledComponents.jsx';
import {CustomerImage} from '../customer_images/CustomerImage.jsx';

const LargeImage = ({src, currentNode, displayImageInModal}) => {
  let image = {
    backgroundImage: `url('${src}')`
  };
  return (
    <div className={styles.largeImage}
      style={image}>
      {
        (currentNode.prev === null) ? <div className={styles.toPrevImage}/>
        : <div className={`${styles.toPrevImage} ${styles.arrowWrapper}`}
          data-review-index={currentNode.prev.reviewIndex}
          data-media-index={currentNode.prev.index}
          onClick={displayImageInModal}>
          <div className={styles.arrow}></div>
        </div>
      }
      {
        (currentNode.next === null) ? <div className={styles.toNextImage}/>
        : <div className={`${styles.toNextImage} ${styles.arrowWrapper}`}
          data-review-index={currentNode.next.reviewIndex}
          data-media-index={currentNode.next.index}
          onClick={displayImageInModal}>
          <div className={styles.arrow}></div>
        </div>
      }
    </div>
  );
};

const ModalReview = ({productReview, mediaIndex, displayImageInModal}) => {
    let currentNode = productReview.media[mediaIndex];
    return (
      <>
        <div className={styles.toGalleryWrapper}
          data-review-index={-1}
          data-media-index={-1}
          onClick={displayImageInModal}>
          <div className={styles.toGallery}></div>
          View Image Gallery
        </div>
  
        <div className={styles.reviewWrapper}>
          <LargeImage src={prefaceURL(currentNode.url)} 
            currentNode={currentNode} 
            displayImageInModal={displayImageInModal}/>
  
          <div className={styles.review}>
            <div className="product-name">{productReview.productName}</div>
            <div className='headline'>
              <FiveStarsSmall rating={productReview.stars}/>
              <span>{productReview.headline}</span>
            </div>
            <div className="byline gray">By {productReview.username} on {formatDate(productReview.posted)}</div>
            <div dangerouslySetInnerHTML={{__html: productReview.body}}></div>
  
            <div>
              <div>Images in this review</div>
              <div className={styles.reviewGallery}>
                {
                  productReview.media.map(mediaNode => {
                    let className = (mediaNode.index === mediaIndex) ? 'selected-line' : '';
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