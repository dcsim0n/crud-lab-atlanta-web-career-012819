import React, { Component } from 'react';
import { connect } from 'react-redux'
import C from '../../constants';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text: ""
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.dispatch({
      type: C.ADD_RESTAURANT,
      text: this.state.text
    })
    console.log("Submitting...")
  }
  handleNameChange = (e) =>{
    console.log(e.target.name)
    this.setState({text: e.target.value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name"
            onChange={this.handleNameChange}
            value = {this.state.name}
            /> <br />
          <input type="submit" value="New Restaurant" />
        </form>
      </div>
    );
  }
};

export default connect()(RestaurantInput)
