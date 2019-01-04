import React from 'react';
import FeatureRating from './FeatureRating.jsx';
import styles from './stylesStars.css';
import {FiveStars} from '../styled_components/StyledComponents.jsx';

const StarBar = ({stars, percent}) => {
  let innerBarWidth = {width: `${percent}%`};
  return (
    <div className={styles.starBarWrapper}>
      <div className={styles.starNumber}>{stars} star</div>
      <div className={styles.starBarOuter}>
        <div className={styles.starBarInner} style={innerBarWidth}> </div>
      </div>
      <div className={styles.starPercent}>{percent.toFixed(0)}%</div>
    </div>
  );
}

const StarRatings = ({starData, featureData}) => {
  return (
    <div className={`${styles.starRatings}`}>
      <div className={styles.section}>
        <h2>{starData.total} customer  
          {(starData.total !== 1) ? ' reviews' : ' review'}
        </h2>
        
        <div className={styles.overall}>
          <FiveStars rating={starData.average}/>
          <span>{starData.average} out of 5 stars</span>
        </div>

        <div className={styles.starBarTable}>
          {
            starData.counts.map((count, stars) => {
              let percent = (count / starData.total) * 100;
              return (stars === 0) 
                ? ''
                : <StarBar stars={stars} percent={percent} />
            })
          }
        </div>
      </div>
      
      <div>
        {
          (Object.keys(featureData).length < 1)
          ? ''
          : <>
            <h2>By feature</h2>
            <div className={styles.features}>
              {
                Object.entries(featureData).map(pair => {
                  return <FeatureRating feature={pair[0]} rating={pair[1]}/>
                })
              }
            </div>
          </>
        }
      </div>

      <div className={styles.section}>
        <h3>Review this product</h3>
        <p>Share your thoughts with other customers</p>
        <button>Write a customer review</button>
      </div>
    </div>
  );

};

export default StarRatings;