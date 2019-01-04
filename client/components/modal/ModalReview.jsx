import React from 'react';
import styles from './stylesModal.css';
import {formatDate, prefaceURL} from '../../helpers';
import {FiveStarsSmall} from '../styled_components/StyledComponents.jsx';
const LargeImage = ({src}) => {
  let image = {
    backgroundImage: `url('${src}')`
  };
  console.log('HEYYYYYYYYYYYY', image);
  return (
    <div className={styles.largeImage}
      style={image}>
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
          <LargeImage src={prefaceURL(currentNode.url)}>
            {/* {
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
            } */}
          </LargeImage>
  
          <div className={styles.review}>
            <div className="product-name">{productReview.productName}</div>
            <div className='headline'>
              <FiveStarsSmall rating={productReview.stars}/>
              <span>{productReview.headline}</span>
            </div>
            <div className="byline gray">By {productReview.username} on {formatDate(productReview.posted)}</div>
            <div dangerouslySetInnerHTML={{__html: productReview.body}}></div>
  
            <div>
              <div className="review-images gray">Images in this review</div>
              {
                // productReview.media.map(mediaNode => {
                //   let className = (mediaNode.index === mediaIndex) ? 'selected-line' : '';
                //   return (
                //     <Thumbnail 
                //     mediaNode={mediaNode}
                //     displayImageInModal={displayImageInModal}
                //     className={className}
                //     />
                //   );
                // })
                }
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ModalReview;