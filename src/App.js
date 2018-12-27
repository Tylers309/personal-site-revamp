import React, { Component } from 'react';

import styled from 'styled-components';

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
  min-height: 100%;

  position: absolute;

  top: 0;
  left: 0;

  border: 2px solid red;
`;