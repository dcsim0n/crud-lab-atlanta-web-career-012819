import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <div>
          {restaurant.text}
          <button> X </button>
          </div>
          <ReviewsContainer restaurant={restaurant}/>
      
      </div>
    );
  }
};

export default Restaurant;
