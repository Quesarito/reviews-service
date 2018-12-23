import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import StarRatings from './StarRatings.jsx';
import { createGlobalStyle } from 'styled-components';
import AmazonEmber from '../styles/fonts/AmazonEmber_Rg.ttf';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amazon Ember';
    src: url('${AmazonEmber}') format('truetype');
  }
  body {
    font-family: 'Amazon Ember', sans-serif;
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: {},
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
          allReviews: update
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
      <div>
        <GlobalStyles />
        <StarRatings />
        {
          (!this.state.allReviews.hasOwnProperty(this.state.productId)) ? '' : 
            this.state.allReviews[this.state.productId].map(review => 
              <Review key={review.id} productReview={review}/>
            )
        }
      </div>
    );
  }  
}

export default App;