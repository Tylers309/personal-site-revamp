import React, { Component } from 'react';

import styled from 'styled-components';

import Landing from './landing/landing';
import About from './about/about';
import Skills from './skills/skills';
import Contact from './contact/contact';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Wrapper>

        <Landing />

        <About />

        <Skills />

        <Contact />
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