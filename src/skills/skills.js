import React, { Component } from 'react';

import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import background from './Quantum-Gradient.png';

import perfectlyrenee from './renee.jpg';
import ma from './ma.jpg';
import deans from './deans.jpg';
import scott from './scott.jpg';

import filler from './filler.jpg';

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while(element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
}



const setTrigger = (e) => {
  // console.log(e.state.triggerHeight);
  // console.log(e.state)

  let t = e.state.triggerHeight;
  let r = e.state.rootHeight;
  var z = (r / 2) - (t / 2);
  


  document.addEventListener('scroll', () => {
    var dist = '' + window.pageYOffset + document.getElementById('hey').getBoundingClientRect().top

    var viewportOffset = document.getElementById('hey').getBoundingClientRect();
    // these are relative to the viewport
    var dist = viewportOffset.top;
    console.log("dist: "+dist)
    console.log("z: "+z);
    // let distance =
    if (dist <= z + 50 && dist >= z - 50) {
      // trigger the action we want
      e.setState({trigger: true});
      console.log(dist)
    } else {
      e.setState({trigger: false});
      console.log('false')
    }
  })

  
}

class Skills extends Component {

state = {
  triggerHeight: '',
  rootHeight: '',
  trigger: false,

}



componentDidMount() {
  this.setState({triggerHeight: document.getElementById('hey').clientHeight}, () => console.log(this.state.triggerHeight));
  this.setState({rootHeight: document.getElementById('root').clientHeight}, () => setTrigger(this));

  const slider = document.getElementById('items');
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
  });
}
  render() {
    return(
      <ScrollableAnchor id={'projects'}>
        <Wrapper >
          <Container open={this.state.trigger}>
            <ContainerBackground src={background} height={this.state.containerHeight} width={this.state.containerWidth}/>
            <Overlay></Overlay> {/* Adds inset Box Shadow */}

            <ProjectsText open={this.state.trigger}>Projects</ProjectsText>

            <ProjectsContainer id="items" class=" noselect" open={this.state.trigger}>
                <div class="item">
                    <div class="item-holder">
                        <img class="item-pic" src={perfectlyrenee} alt="Renee Sutton" />

                        <h3 class="item-header"><a href="https://perfectlyrenee.com/" target="_blank">Renee Sutton</a></h3>

                        <p class="item-text">
                          A site made for my mother, a woman of many talents who currently supports a team of 700+ women of a MLM company. Along with taking care of 3 hellion children, 3 dogs, one cat, and one husband.
                        </p>

                    </div>
                    
                </div>
                <div class="item">
                    <div class="item-holder">
                        <img class="item-pic" src={scott} alt="Scott Stephens" />

                        <h3 class="item-header"><a href="https://scottstephens.photo" target="_blank">Scott Stephens</a></h3>

                        <p class="item-text">
                          A showcase site for the most talented photographer I know, Mr. Scott Stephens. He a many time winner of photography awards, with an exceptional affinity for airplanes.
                        </p>
                    </div>
                </div>
                {/* <div class="item">
                    <div class="item-holder">
                        <img class="item-pic" src={filler} alt="Tyler Sutton"/>

                        <h3 class="item-header"><a href="https://deanaircraftservice.com" target="_blank">Blah</a></h3>

                        <p class="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="item-holder">
                        <img class="item-pic" src={filler} alt="Tyler Sutton" />

                        <h3 class="item-header">Blah</h3>

                        <p class="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            
                        </p>
                      </div>
                </div>
                <div class="item">
                    <div class="item-holder">
                        <img class="item-pic" src={filler} alt="Tyler Sutton" />

                        <h3 class="item-header">Blah</h3>

                        <p class="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            
                        </p>
                      </div>
                </div>
                <div class="item">
                    <div class="item-holder">
                        <img class="item-pic" src={filler} alt="Tyler Sutton" />

                        <h3 class="item-header">Blah</h3>

                        <p class="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            
                        </p>
                      </div>
                </div> */}
              </ProjectsContainer>
          </Container>
          <InitialTrigger id="hey" ></InitialTrigger>
          
            
        
      
        </Wrapper>
      </ScrollableAnchor>
    );
  }
}

export default Skills;



  


const Wrapper = styled.div`
  height: 50vh;
  width: 100vw;

  position: relative;
  

  background-color: #fff;
// this color is for the {} and : and ,
  color: #ABB2BF;

  
  


  font-size: 24px;
  line-height: 1.3;

  /* padding: 5% 20px; */
 

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;


const Container = styled.div`
  height: ${props => props.open ? "110vh;" : "50vh;"};
  width: 100vw;
  max-width: 100vw !important;
  
  /* border: 2px solid red; */

  position: absolute;

  top: ${props => props.open ? "-55%;" : "0;"};

  z-index: 2;

  transition: .5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  /* background-image: url(${background});
  background-repeat: none;
  background-size: cover;
  background-attachment: fixed; */

  overflow: hidden;
`;


const InitialTrigger = styled.div`
  height: 15%;
  width: 100%;

  position: absolute;

  top: 45%;
  left: 0;

  z-index: 25;

  /* background-color: #987531; */

`;


const ContainerBackground = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
box-shadow: inset 0px 0px 54px -16px rgba(0,0,0,0.75);
`;

const ProjectsText = styled.h1`
  font-size: 32px;
  font-weight: lighter;

  z-index: 5000;

  color: #fff;
  position: absolute;
  transition: 0.5s;
  transition-delay: .2s;
  ${props => props.open ? "top: 5%; left: 0%;" : "top: 50%; left: 50%; transform: translateY(-50%); transform: translateX(-50%);"};

  padding: 20px 30px;
  background-color: #2f2e2e;
`;

const ProjectsContainer = styled.div`
  height: 100%;
  min-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;

  position: relative;
  padding-top: 5%;

  opacity: ${props => props.open ? "100%;" : "0%;"};
  transition: 0.5s;
  transition-delay: .2s;
  cursor: pointer;
  will-change: transform;
`;








const WrapperLeft = styled.div`
  width: 50%;
  height: 100%;

  float: left;

  display: flex;
  justify-content: center;

  

  @media (max-width: 900px) {
    height: 50%;
    width: 100%;
  }
`;

const WrapperRight = styled(WrapperLeft)``;

const SkillsHolder = styled.div`
  align-self: center;
  width: 100%;
  height: 100%;

  padding: 25px 25px 25px 25px;

  /* border-radius: 20px; */

  /* box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2); */

  -webkit-box-shadow: 0px 0px 36px 4px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 36px 4px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 36px 4px rgba(0,0,0,0.2);

  background-color: #282C34;

  @media (max-width: 768px) {
    padding: 10px 0 10px 10px;

    width: 95%;
  }


`;

const Key = styled.span` color: #E06C75; `;

const Value = styled.span` 
  color: #98C379; 
`;



const Padding = styled.div`
  width: 20px;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 5px;
  }
`;




const RightHolder = styled.div`
  align-self: center;
`;

const Header = styled.h1`
  font-size: 45px;
  font-weight: 100;

  text-align: center;

  margin: 50px 0;
  color: #2f2e2e;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const RightText = styled.p`
  font-size: 19px;
  font-weight: 100;

  width: 70%;

  padding: 0 50px;

  margin: 0 auto;

  color: #2f2e2e;

  @media (max-width: 768px) {
    font-size: 14px;

    padding: 0;
  }
`;
/* <WrapperLeft>
              <SkillsHolder>
                <OpenB />
                  <Padding /><Key>"developer"</Key>: <OpenB inline/>
                  
                  <br />

                  <Padding /><Padding /><Key>"stats"</Key>: <OpenB inline/>
                    <br />
                    <Padding /><Padding /><Padding /><Key>"firstName"</Key>: <Value>"John"</Value>, <br />
                    <Padding /><Padding /><Padding /><Key>"middleName"</Key>: <Value>"Tyler"</Value>,<br />
                    <Padding /><Padding /><Padding /><Key>"lastName"</Key>: <Value>"Sutton</Value>, <br />
                    <Padding /><Padding /><Padding /><Key>"age"</Key>: <Value>17.5</Value> <br />
                    <Padding /><Padding /><CloseB inline/>, <br /><br />

                    <Padding /><Padding /><Key>"skills"</Key>: <OpenB inline />
                    <br />
                    <Padding /><Padding /><Padding /><Key>"years"</Key>: <Value>2</Value>, <br />
                    <Padding /><Padding /><Padding /><Key>"frontEnd"</Key>: [<Value>"html"</Value>, <Value>"css"</Value>, <Value>"javascript"</Value>, <Value>"react"</Value>, <Value>"jquery"</Value>], <br />
                    <Padding /><Padding /><Padding /><Key>"backend"</Key>: [<Value>"node"</Value>, <Value>"express"</Value>, <Value>"sql"</Value>, <Value>"php"</Value>], <br />
                    <Padding /><Padding /><Padding /><Key>"design"</Key>: [<Value>"pencil"</Value>, <Value>"papaer"</Value>, <Value>"adobeXd"</Value>]<br />
                    <Padding /><Padding /><CloseB inline/> <br />
                    
                  <Padding /><CloseB inline/>
                <CloseB />
              </SkillsHolder>
            </WrapperLeft>

            <WrapperRight>

              <RightHolder>
                <Header>My Skills</Header>

                <RightText>
                  Over the past two years of creating websites I have transitioned from creating sites 
                  only on the frontend to creating intricate backends as well as frontends. My skillset 
                  has increased dramatically so anything that you need I can tackle and give you a working solution.
                  But all this talk is worth nothing without some actual code, right? Here's my <a href="https://github.com/Tylers309/" target="_blank">Github</a>. 
                  Feel free to contribute to anything that strikes your interest!
                </RightText>
              </RightHolder>

            </WrapperRight> */
