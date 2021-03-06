import React, { Component } from 'react';

import styled from 'styled-components';


class Header extends Component {
  
  render() {
    return (
      <Wrapper>
        <Text>Web Designer | Web Developer</Text>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;

  top: 0;
  left: 0;
  z-index: -1;

  display: flex;
  justify-content: center;

`;

const Text = styled.h1`
  align-self: center;

  font-size: 48px;
  font-weight: 100;

  color: #2f2e2e;
  
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// const SmallText = styled.h4`
// font-size: 24px; font-style: italic; font-weight: 100;
// @media (max-width: 768px) {
//     font-size: 14px;
//   }`;