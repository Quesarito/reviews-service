import React from 'react';
import styles from './stylesStars.css';

const StarBar = ({stars}) => {
  return (
    <div className={styles.starBarWrapper}>
      <span>{stars} star</span>
    </div>
  );
}
{/* <StarBar as="a" href="#" */}
                //   key={stars} percent={percent}>
                //   <span>{stars} star</span>
                //   <div className="wrapper" >
                //     <div className="fill"></div>
                //   </div>
                //   <span className="gray">
                //     {percent.toFixed()}%
                //   </span>
                // </StarBar>

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

export default StarBar;