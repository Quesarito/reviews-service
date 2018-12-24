import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import StarRatings from './StarRatings.jsx';
import { createGlobalStyle } from 'styled-components';
import AmazonEmber from '../styles/fonts/AmazonEmber_Rg.ttf';
import {FiveStar, FiveStarSmall} from './FiveStar.jsx';
import ReviewList from './ReviewList.jsx';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmber}') format('truetype');
  }
  body {
    font-family: 'Amazon Ember', sans-serif;

  }
  
  .gray {
    color: #555;
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
      productId: 93
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
      .then(({reviewData, starData}) => {
        let update = this.state.allReviews;
        update[productId] = reviewData;
        this.setState({
          starData,
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
            <StarRatings starData={this.state.starData}/>
        }
        {
          (!this.state.allReviews.hasOwnProperty(this.state.productId)) ? '' : 
            <ReviewList reviews={this.state.allReviews[this.state.productId]} />
        }
      </StyledApp>
    );
  }  
}

export default App;