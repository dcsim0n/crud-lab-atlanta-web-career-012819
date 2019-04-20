import C from '../../constants'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Review from './Review';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: this.props.restaurant.id,
       content: ""
    }
  }

  handleChange = (e)=>{
    this.setState({content: e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    const action = {
      type: C.ADD_REVIEW,
      ...this.state
    }
    this.props.dispatch(action)
    e.target.reset()
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input 
            name="content" 
            type="text" 
            value={this.state.content} 
            onChange={this.handleChange}
          />
          <input type="submit" value="New Review" />
        </form>
      </div>
    );
  }
};



export default connect(null)(ReviewInput)