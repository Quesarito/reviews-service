import React from 'react';
import styled from 'styled-components';
import {GlobalStyles} from './StyledComponents.jsx';
import StarRatings from './StarRatings.jsx';
import CustomerImageList from './CustomerImageList.jsx';
import ImageModal from './ImageModal.jsx';
import Keywords from './Keywords.jsx';
import ReviewList from './ReviewList.jsx';
import {buildMediaList} from '../helpers';

const StyledApp = styled.div`
  display: flex;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
      starData: {},
      featureData: {},
      mediaList: null,
      productId: 55,
      modal: {
        display: false,
        mediaIndex: -1,
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
      .then(reviews => {
        this.processReviews(reviews);
      })
      .catch(err => {
        console.log('ERROR FETCHING REVIEWS****************', err);
      });
  }

  processReviews({reviewData, starData, featureData}) {
    let mediaList = buildMediaList(reviewData);
    this.setState({
      reviewData,
      starData,
      featureData,
      mediaList
    }, err => {
      if (err) {
        console.log('Error in setState');
        throw err;
      }
      console.log(this.state);
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
    });
  }

  toggleModal() {
    return (e) => {
      this.setState({
        modal: {
          display: !this.state.modal.display,
          mediaIndex: -1,
          reviewIndex: -1
        }
      }, err => {
        if (err) throw err;
      });
    }
  }

  render() {
    return (
      <StyledApp>
        <GlobalStyles />
        <button onClick={this.toggleModal()}>toggle</button>
        {
          (!this.state.modal.display) ? '' :
            <ImageModal 
              mediaIndex={this.state.modal.mediaIndex}
              productReview={this.state.reviewData[this.state.modal.reviewIndex]}
              toggleModal={this.toggleModal()}
              displayImageInModal={this.displayImageInModal.bind(this)}/>
        }
        {
          (!this.state.starData.hasOwnProperty('total')) ? '' : 
            <StarRatings 
              starData={this.state.starData} 
              featureData={this.state.featureData}/>
        }
        <div className="review-wrapper">
          {
            (!this.state.reviewData.length > 0) ? '' : 
            <>
              <CustomerImageList 
                mediaList={this.mediaList}
                displayImageInModal={this.displayImageInModal.bind(this)}/>
              <Keywords />
              <ReviewList reviews={this.state.reviewData} 
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