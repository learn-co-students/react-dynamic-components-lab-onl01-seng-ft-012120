import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  
  render() {
    return (
     this.props.opacity >= .2 ? 
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
       <ColorBox opacity= {this.props.opacity - .1}/>
      </div> 
      : null
    )
  }

}

