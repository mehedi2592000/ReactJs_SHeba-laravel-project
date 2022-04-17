import React, { Component } from 'react'


export default class Ajax extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         setvalue1: ' '
      }
    }

    handel=(e)=>{
        this.setState({
            setvalue1: e.target.value
        })
        
       console.log(e.target.value)

    }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handel}></input>
        <p>{this.state.setvalue1}</p>
      </div>
    )
  }
}
