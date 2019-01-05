import React from 'react';
import {formatDate} from '../../helpers';
import {CustomerImage} from '../customer_images/CustomerImage.jsx';
import reviewStyles from './stylesReviews.css';
import styles from '../styled_components/stylesComponents.css';
import {FiveStarsSmall} from '../styled_components/StyledComponents.jsx';

const Review = ({productReview, displayImageInModal}) => {
  return (
    <div className={reviewStyles.review}>
      {/* HEADER: AUTHOR INFO */}
      <div className={reviewStyles.author}>
        <img className={reviewStyles.avatar}
          src={productReview.avatar}
        />
        {productReview.username}
      </div>

      {/* HEADER: REVIEW INFO */}
      <div className={reviewStyles.reviewInfo}>
        <div className={reviewStyles.headline}>
          <FiveStarsSmall rating={productReview.stars}/> 
          <span>{productReview.headline}</span>
        </div>  
        <div className={reviewStyles.date}>{formatDate(productReview.posted)}</div>
        <div className={reviewStyles.verified}>{(productReview.verified) ? 'Verified Purchase' : ''}</div>
      </div>

      {/* REVIEW BODY -- add read more tag */}
      <div className={reviewStyles.body} dangerouslySetInnerHTML={{__html: productReview.body}}>
      </div>

      {/* IMAGE THUMBNAILS */}
      <div className={reviewStyles.images}>
        {productReview.media.map((mediaNode) => 
          <CustomerImage 
            key={mediaNode.index}
            mediaNode={mediaNode}
            displayImageInModal={displayImageInModal}
          />)}
      </div>
      
      {/* FOOTER: HELPFUL, CONTACT, REPORT */}
      <div className={reviewStyles.footer}>
        <div className={reviewStyles.helped}>{productReview.helpful} people found this helpful</div>
        <div className={reviewStyles.actions}>
          <button className={reviewStyles.helpful}>Helpful</button> 
          <div className={styles.separator}></div>
          <a className={reviewStyles.styledLink} href="#">Comment</a>
          <div className={styles.separator}></div>
          <a className={reviewStyles.styledLink} href="#">Report abuse</a>
        </div>
      </div>
    </div>
  );
};

Review.displayName = 'Review';
export default Review;
