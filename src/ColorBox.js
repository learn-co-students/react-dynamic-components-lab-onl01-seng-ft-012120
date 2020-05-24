import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const op = this.props.opacity
    console.log(op);
    return ( op < .2 ? null : ( <div className="color-box" style={{opacity: op }}>
         <ColorBox opacity={op-.1} />
      </div>
    
    )
    )
  }

}

