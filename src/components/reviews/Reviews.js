import C from '../../constants'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Review from './Review';


class Reviews extends Component {
  render() {
    const { reviews } = this.props
    console.log('reviews', reviews)
    return (
      <ul>
        {reviews.map(review => <li><Review key={review.id} review={review} /></li>)}
      </ul>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const restId = ownProps.restaurant.id
  console.log('ownProps', ownProps)
  return {
    reviews: state.reviews.filter((review)=> review.restaurantId === restId)
  }
}

export default connect(mapStateToProps)(Reviews)