import React, { Component } from 'react';

import styled from 'styled-components';

import Navigation from './nav/nav';
import Header from './header/header';

import Cube from './cube/cube';
// import Circle from './circle/circle';
import Pyramid from './pyramid/pyramid';
import Cylinder from './cylinder/cylinder';

import trigger from './pictures/trigger.png';
import eventListener from './pictures/eventListener.png';

class Landing extends Component {
  


  render() {
    return (
      <Wrapper>

        <Navigation />

        <LandingLeft>

          <Cube />

          <Pyramid />

          <Cylinder />
        </LandingLeft>

        <LandingRight>
          <TriggerImg src={trigger} alt="Tyler Sutton" />

          <EventImg src={eventListener} alt="Tyler Sutton" />
        </LandingRight>
        

        <Header />

        

      </Wrapper>
      
    );
  }
}

export default Landing;


const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

`;



const LandingLeft = styled.div`
  height: 100%;
  width: 50%;

  border: 2px solid red;

  position: relative;

  float: left;

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

const LandingRight = styled(LandingLeft)``;
const TriggerImg = styled.img`
  height: auto;
  max-width: 35%;

  position: absolute;

  top: 20%;

  right: 5%;

  border-radius: 10px;

  transform: rotate(-5deg);
`;

const EventImg = styled(TriggerImg)`
max-width: 45%;
  top: 75%;

  right: 3%;

  transform: rotate(3deg);
  `;

