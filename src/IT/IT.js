import React, { Component } from 'react';

import styled from 'styled-components';

class IT extends Component {

  render() {
    return (
      
      <Wrapper>
        <CertContainer>
          <CertHolder>
            <CertName>
              CompTIA Security+
            </CertName>
            <a href="https://www.youracclaim.com/badges/745d03a5-e111-4052-b3bf-073432b2cffe/public_url">kjalskdfj</a>
            <CertImg>

            </CertImg>
          </CertHolder>
          <CertHolder>
            
          </CertHolder>
          
          <CertHolder>
            
          </CertHolder>
  
        </CertContainer>
      </Wrapper>
    )
  }
}

export default IT;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  border: 2px solid red;

  margin: 100px 0;
`;

const CertContainer = styled.div`
  height: 100vh;
  width: 30vw;

  display: flex;
  
  flex-direction: column;
justify-content: center;
align-items: center;
  float: left;

  background-color: #e8e8e8;

`;

const CertHolder = styled.div`
  height: 150px;
  width: 90%;

  position: relative;


  background-color: #d8d8d8;
  border: 2px solid red;
`;

const CertName = styled.div`
`;

const CertImg = styled.img``;