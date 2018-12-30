import React from 'react';
import styled from 'styled-components';
import {GlobalStyles} from './StyledComponents.jsx';
import StarRatings from './StarRatings.jsx';
import CustomerImageList from './CustomerImageList.jsx';
import ImageModal from './ImageModal.jsx';
import Keywords from './Keywords.jsx';
import ReviewList from './ReviewList.jsx';

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
      modal: {
        display: false,
        mediaIndex: -1, //Default to gallery view
        reviewIndex: -1
      }
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
    let data = e.target.dataset;
    this.setState({
        modal: {
          display: true,
          mediaIndex: parseInt(data.mediaIndex),
          reviewIndex: parseInt(data.reviewIndex)
        }
    }, err => {
      if (err) throw err;
      console.log('displayed image', this.state.displayModal);
    });

  }

  toggleModal() {
    return (e) => {
      console.log(this);
      console.log(e.target);
      this.setState({
        modal: {
          display: !this.state.modal.display,
          mediaIndex: -1,
          reviewIndex: -1
        }
      }, err => {
        if (err) throw err;
        console.log('toggled modal: ', this.state.modal);
      });
    }
  }

  render() {
    return (
      <StyledApp>
        <GlobalStyles />
        <button onClick={this.toggleModal()}>toggle</button>
        {
          (!this.state.modal.display) ? console.log('APP', 'modal off') :
            <ImageModal 
              mediaIndex={this.state.modal.mediaIndex}
              reviewIndex={this.state.modal.reviewIndex}
              productReview={this.state.allReviews[this.state.productId][this.state.modal.reviewIndex]}
              toggleModal={this.toggleModal()}
              displayImageInModal={this.displayImageInModal.bind(this)}/>
            // console.log(this.state.allReviews[this.state.productId][this.state.modal.reviewIndex])
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