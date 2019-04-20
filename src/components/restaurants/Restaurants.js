import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux'

class Restaurants extends Component {
  render() {
    const {restaurants} = this.props
    return(
      <ul>
        {restaurants.map(restaurant=> <li><Restaurant key={restaurant.id} restaurant={restaurant}/></li>) }
      </ul>
    );
  }
};

function stateToProps(state){
  return {restaurants: state.restaurants}
}

export default connect(stateToProps)(Restaurants)