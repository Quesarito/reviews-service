import React from 'react';
// import styled from 'styled-components';
import {FiveStar} from './FiveStar.jsx';
import {StyledButton} from './StyledComponents.jsx';
import FeatureRating from './FeatureRating.jsx';
import styles from './stylesStars.css';
// import StarBar from './StarBar.jsx';

// const StyledStarRatings = styled.div`
//   font-size:13px;
//   width: 300px;

//   &>div:first-of-type {
//     display: flex;
//     margin-bottom: 20px;

//     div {
//       margin-right: 10px;
//     }
//   }

//   a {
//     color: #0066c0;
//   }
// `;

// const Section = styled.div`
//   padding: 10px 0 20px 0;
//   border-bottom: solid 1px #d3d3d3;
// `;

// const StarTable = styled(Section)`
//   display: flex;
//   flex-direction: column-reverse;
// `;

// const StarBar = styled.div`
//   text-decoration: none;
//   width: 300px;
//   display: flex;
//   align-items: center;
  
//   .wrapper {
//     background: linear-gradient(to bottom,#eee,#f6f6f6);
//     background-color: #f3f3f3;
//     border-radius: 1px;
//     box-shadow: inset 0 1px 1px 1px rgb(0, 0, 0, 0.3);
//     height: 17px;
//     width: 200px;
//     margin:2px 5px 2px 8px;
    
//     .fill {
//       background: linear-gradient(to bottom,#ffce00,#ffa700);
//       border-radius: inherit;
//       box-shadow: inset 0 0px 0px 1px rgb(0, 0, 0, 0.3);
//       box-sizing: border-box;
//       width: ${({percent}) => percent}%;
//       height:inherit;
//     }

//   }

//   :hover {
//     span {
//       color: #c45500;
//       text-decoration: underline;
//     }
//   }
// `;

// const FeatureTable = styled(Section)`
  
// `;

const StarBar = ({stars, percent}) => {
  let innerBarWidth = {width: `${percent}%`};
  return (
    <div className={styles.starBarWrapper}>
      <div className={styles.starNumber}>{stars} star</div>
      <div className={styles.starBarOuter}>
        <div className={styles.starBarInner} style={innerBarWidth}> </div>
      </div>
      <div className={styles.starPercent}>{percent}%</div>
    </div>
  );
}


let StarRatings = ({starData, featureData}) => {
  return (
    <div className={styles.starRatings}>
      <h2>{starData.total} customer  
        {(starData.total !== 1) ? ' reviews' : ' review'}
      </h2>
      <div>
        *****
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
  );
  // return (
  //   <StyledStarRatings>
  //     <h2>{starData.total} customer  
  //       {(starData.total !== 1) ? ' reviews' : ' review'}
  //     </h2> 
  //     <div>
  //       <FiveStar rating={starData.average} />
  //       <span>{starData.average} out of 5 stars</span>
  //     </div>
      
  //     <StarTable>
  //       {
  //         starData.counts.map((count, stars) => {
  //           let percent = (count / starData.total) * 100;
  //           return (stars === 0) 
  //             ? ''
  //             : (
  //               <StarBar as="a" href="#"
  //                 key={stars} percent={percent}>
  //                 <span>{stars} star</span>
  //                 <div className="wrapper" >
  //                   <div className="fill"></div>
  //                 </div>
  //                 <span className="gray">
  //                   {percent.toFixed()}%
  //                 </span>
  //               </StarBar>
  //             );
  //         })
  //       }
  //     </StarTable>

  //     {
  //       (Object.keys(featureData).length < 1)
  //         ? ''
  //         : <FeatureTable>
  //           <h3>By feature</h3>
  //           {
  //             Object.entries(featureData).map(pair => {
  //               return (
  //                 <FeatureRating feature={pair[0]} rating={pair[1]}/>
  //               );
  //             })
  //           }
  //         </FeatureTable>
  //     }

  //     <Section>
  //       <h3>Review this product</h3>
  //       <p>Share your thoughts with other customers</p>
  //       <StyledButton>Write a customer review</StyledButton>
  //     </Section>
  //   </StyledStarRatings>
  // );
};

export default StarRatings;