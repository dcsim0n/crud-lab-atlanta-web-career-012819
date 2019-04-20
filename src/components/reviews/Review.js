import React, { Component } from 'react';

class Review extends Component {
  render() {
    const { review ,remove} = this.props

    return (
      <div>
        <p>
          {review.text}
        </p>
        <button onClick={remove}> X </button>
      </div>
    );
  }

};

export default Review;
