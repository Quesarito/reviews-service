import React from 'react';
import {formatDate} from '../helpers';
import {CustomerImage} from './CustomerImage.jsx';
import styles from './stylesReviews.css';
import {FiveStarsSmall} from './StyledComponents.jsx';

const Review = ({productReview, displayImageInModal}) => {
  return (
    <div className={styles.review}>
      {/* HEADER: AUTHOR INFO */}
      <div className={styles.author}>
        <img className={styles.avatar}
          src={productReview.avatar}
        />
        {productReview.username}
      </div>

      {/* HEADER: REVIEW INFO */}
      <div className={styles.reviewInfo}>
        <div className={styles.headline}>
          <FiveStarsSmall rating={productReview.stars}/> 
          <span>{productReview.headline}</span>
        </div>  
        <div className={styles.date}>{formatDate(productReview.posted)}</div>
        <div className={styles.verified}>{(productReview.verified) ? 'Verified Purchase' : ''}</div>
      </div>

      {/* REVIEW BODY -- add read more tag */}
      <div className={styles.body} dangerouslySetInnerHTML={{__html: productReview.body}}>
      </div>

      {/* IMAGE THUMBNAILS */}
      <div className={styles.images}>
        {productReview.media.map((mediaNode) => 
          <CustomerImage 
            mediaNode={mediaNode}
            displayImageInModal={displayImageInModal}
          />)}
      </div>
      
      {/* FOOTER: HELPFUL, CONTACT, REPORT */}
      <div className={styles.footer}>
        <div className="helpful">{productReview.helpful} people found this helpful</div>
        <div>
          <button className={styles.helpful}>Helpful</button> 
          <span className="gray">| <a className={styles.styledLink} href="#">Comment</a> | <a className={styles.styledLink} href="#">Report abuse</a></span>
        </div>
      </div>
    </div>
  );
};

Review.displayName = 'Review';
export default Review;
