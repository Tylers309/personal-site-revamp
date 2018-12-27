import React, { Component } from 'react';

import styled from 'styled-components';

import Navigation from './nav/nav';


class Landing extends Component {
  render() {
    return (
      <Wrapper>

        <Navigation />

      </Wrapper>
      
    );
  }
}

export default Landing;


const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  border: 2px solid blue;
`;