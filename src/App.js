import React, { Component } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Landing from './landing/landing';
// import IT from './IT/IT';
import About from './about/about';
import Skills from './skills/skills';
import Contact from './contact/contact';
import './App.css';
ReactGA.initialize('UA-107598464-3');
ReactGA.pageview(window.location.pathname + window.location.search);

// import Footer from './footer/footer';



class App extends Component {
  
  render() {
    return (
      <Wrapper>

        <Landing />

        {/* <IT /> */}
        <Breaker />

        <About />

        <Breaker />

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

const Breaker = styled.div`
  width: 100vw;
  height: 5vh;

  position: relative;


`;
