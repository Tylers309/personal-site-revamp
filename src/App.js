import React, { Component } from 'react';

import styled from 'styled-components';

import Landing from './landing/landing';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Wrapper>

        <Landing />

      </Wrapper>
    );
  }
}

export default App;


const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  top: 0;
  left: 0;
`;