import React, { Component } from 'react';


import './pyramid.css'


class Pyramid extends Component {
  
  state = {
    isAnimationDone: true
  }


  
  handleHoverOver = () => {
    if(this.state.isAnimationDone) {
      // If animation is not going

      this.setState({isAnimationDone: false});

      setTimeout(() => {
        // After the 2 secs, "shut" the animation off
 
        this.setState({isAnimationDone: true});
      }, 2000);
    } 
  }
  

  render() {
    return (
      <div className="pyramid-gyro" onMouseOver={this.handleHoverOver}>
        <div className={`pyramid-axis ${this.state.isAnimationDone ? '' : 'pyramid-spin'}`}>
          
          <div className="pyramid-wall front"></div>
          <div className="pyramid-wall back"></div>
          <div className="pyramid-wall left"></div>
          <div className="pyramid-wall right"></div>
          
          <div className="bottom"></div>
        </div>
      </div>
    );
  }
}

export default Pyramid;
