import React, { Component } from 'react';

import styled from 'styled-components';

import Landing from './landing/landing';
import About from './about/about';
import Skills from './skills/skills';
import Contact from './contact/contact';



// import Footer from './footer/footer';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Wrapper>

        <Landing />


        <Skills />
        
        <Contact />
        

        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default App;


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;

  top: 0;
  left: 0;
`;
