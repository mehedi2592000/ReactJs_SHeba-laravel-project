import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increment = () =>{
        this.setState({
            count: this.state.count+1
        })
    }
    Decrement = () =>{
        this.setState({
            count: this.state.count-1
        })
    }
  render() {
      const {count} =this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <Button variant="primary" onClick={this.Increment}>+</Button>
        <Button variant="danger" onClick={this.Decrement} disabled={count===0 ? true : false}>-</Button>
        
      </div>
    )
  }
}
