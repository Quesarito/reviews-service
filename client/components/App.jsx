import React from 'react';
import Review from './Review.jsx';
import StarRatings from './StarRatings.jsx';

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
    fetch(`/reviews/${productId}`)
      .then(res => {
        return res.json();
      })
      .then(reviewData => {
        let update = this.state.allReviews;
        update[productId] = reviewData;
        this.setState({
          allReviews: update
        }, err => {
          if (err) {
            console.log('Error in setState');
            throw err;
          }
          // console.log('&&&&&&&&&&&&&&&&&&&&&&', this.state.allReviews);
        });
      })
      .catch(err => {
        console.log('ERROR FETCHING REVIEWS****************', err);
      });
  }

  render() {
    return (
      <div>
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