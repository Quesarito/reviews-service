import React from 'react';
import styled from 'styled-components';
import StarRatings from './StarRatings.jsx';
import {createGlobalStyle} from 'styled-components';
import AmazonEmber from '../styles/fonts/AmazonEmber_Rg.ttf';
import AmazonEmberBold from '../styles/fonts/AmazonEmber_Bd.ttf';
import ReviewList from './ReviewList.jsx';
import CustomerImages from './CustomerImages.jsx';
import Keywords from './Keywords.jsx';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmber}') format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmberBold}') format('truetype');
    font-weight: bold;
  }
  body {
    font-family: 'Amazon Ember', Arial, sans-serif;

  }
  
  .review-wrapper {
    margin-left: 70px;
  }

  .gray {
    color: #555;
  }

  .lightgray {
    color: #767676;
  }

  .orange {
    color: #c45500;
  }

  .blue {
    color: #0066c0;
  }

  .flex-left-center {
    display: flex;
    align-items: center;
  }
`;

const StyledApp = styled.div`
  display: flex;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: {},
      starData: {},
      featureData: {},
      productId: 94
    };
  } 

  componentDidMount() {
    this.fetchReviews(this.state.productId);
  }

  fetchReviews(productId) {
    fetch(`/reviews/${productId}`, {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(({reviewData, starData, featureData}) => {
        let update = this.state.allReviews;
        update[productId] = reviewData;
        this.setState({
          starData,
          featureData,
          allReviews: update,
        }, err => {
          if (err) {
            console.log('Error in setState');
            throw err;
          }
        });
      })
      .catch(err => {
        console.log('ERROR FETCHING REVIEWS****************', err);
      });
  }

  

  render() {
    return (
      <StyledApp>
        <GlobalStyles />
        {
          (!this.state.starData.hasOwnProperty('total')) ? '' : 
            <StarRatings 
              starData={this.state.starData} 
              featureData={this.state.featureData}/>
        }
        <div className="review-wrapper">
          <CustomerImages />
          {
            (!this.state.allReviews.hasOwnProperty(this.state.productId)) ? '' : 
              <>
              <Keywords />
              <ReviewList reviews={this.state.allReviews[this.state.productId]} />
              </>
          }
        </div>
      </StyledApp>
    );
  }  
}

StyledApp.displayName = 'StyledApp';
export default App;