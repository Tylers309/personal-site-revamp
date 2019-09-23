import React, { Component } from 'react';

import styled from 'styled-components';

class Landing extends Component {
  render() {
    return (
      <NavWrapper>

        <NavLeft>
          <NavHolder>
            <NavHeader>
              Tyler Sutton
            </NavHeader>
            
          </NavHolder>
        </NavLeft>

        <NavRight>
          <NavHolder>
            <NavLinks>
              <Link href="#skills">Skills</Link>
              <Link href="#contact">Contact</Link>
                
              
              
            </NavLinks>
          </NavHolder>
        </NavRight>

      </NavWrapper>
      
    );
  }
}

export default Landing;


const NavWrapper = styled.div`
  width: 100%;
  height: 7%;

  position: absolute;

  top: 0;
  left: 0;

  display: grid;

  padding-top: 5px;

  z-index: 2;

  grid-template-columns: repeat(6, 1fr);

  grid-template-areas: 
  "nav-left . . . nav-right nav-right";

  @media (max-width: 768px) {
    grid-template-areas: 
    "nav-left nav-left nav-right nav-right nav-right nav-right";
  }

`;


const NavLeft = styled.div`
  grid-area: nav-left;
  
  display: flex;
  justify-content: center;
`;



const NavRight = styled.div`
  grid-area: nav-right;

  display: flex;
  justify-content: center;
`;

const NavHolder = styled.div` align-self: center; cursor: pointer;`;

const NavHeader = styled.h1`
  font-size: 22px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 16px;
  }

`;


const NavLinks = styled.div`
  font-size: 22px;
  font-weight: 100;

  word-spacing: 2em;


  

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;


const Link = styled.a`
  color: #2f2e2e;

  text-decoration: none;
  
  cursor: pointer;
  margin: 0 15px;
`;
