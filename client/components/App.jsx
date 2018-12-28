import React from 'react';
import styled from 'styled-components';
import {GlobalStyles} from './StyledComponents.jsx';
import StarRatings from './StarRatings.jsx';
import ReviewList from './ReviewList.jsx';
import ImageModal from './ImageModal.jsx';
import CustomerImageList from './CustomerImageList.jsx';
import Keywords from './Keywords.jsx';


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
      productId: 55,
      displayModal: false
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

  //Click handler for image thumbnails
  displayImageInModal(e) {
    e.preventDefault();
    this.setState(
      {displayModal: !this.state.displayModal}, 
      err => {
        if (err) {
          console.log('Error in setting modal display state');
          throw err;
        }
      }
    );
  }

  render() {
    return (
      <StyledApp>
        <GlobalStyles />
        {
          (!this.state.displayModal) ? '' :
            <ImageModal />
        }
        {
          (!this.state.starData.hasOwnProperty('total')) ? '' : 
            <StarRatings 
              starData={this.state.starData} 
              featureData={this.state.featureData}/>
        }
        <div className="review-wrapper">
          {
            (!this.state.allReviews.hasOwnProperty(this.state.productId)) ? '' : 
            <>
              <CustomerImageList displayImageInModal={this.displayImageInModal.bind(this)}/>
              <Keywords />
              <ReviewList reviews={this.state.allReviews[this.state.productId]} 
                displayImageInModal={this.displayImageInModal.bind(this)}/>
            </>
          }
        </div>
      </StyledApp>
    );
  }  
}

StyledApp.displayName = 'StyledApp';
export default App;