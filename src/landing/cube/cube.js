import React, { Component } from 'react';
import './cube.css';


class Cube extends Component {
  
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
      <div className="scene" onMouseOver={this.handleHoverOver}>
        <div className={`cube show-front ${this.state.isAnimationDone ? '' : 'spin'} `}>
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
            
    );
  }
}

export default Cube;
