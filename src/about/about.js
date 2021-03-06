import React, { Component } from 'react';

import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import profileImg from './tylerRaptor.jpg';


class About extends Component {
  
  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <Wrapper>
          {/* Holds about-image and text */}
          <MainHolder>
            {/* About Image Holder*/}
            <ImageHolder>
              <AboutImage src={profileImg} />
            </ImageHolder>

            <TextHolder>
              <TextWrapper>
                <AboutHeader>About</AboutHeader>

                <AboutText>
                  My name is Tyler Sutton, I'm 19 years old and have been writing websites for ~5 years. I enjoy creating and learning new things, I'm proficient in 
                  front-end and backend development from react to node. In the real life I'm an IT Tech certified 
                  in CompTIA's Security+, currently working on my Network+<br/> <br/> I appreciate you looking at my website and hope to work with you in the future!

                </AboutText>
              </TextWrapper>
            </TextHolder>
          </MainHolder>
        </Wrapper>
      </ScrollableAnchor>
    );
  }
}

export default About;


const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;

  

`;

// Holds the about-image and text
const MainHolder = styled.div`
  width: 60vw;
  height: 60vh;

  align-self: center;

  position: relative;

  @media (max-width: 1080px) {
    height: auto;
  }

  @media (max-width: 650px) {
    width: 80vw;
  }

  @media (max-width: 428px) {
    width: 90vw;
  }
`;




const TextHolder = styled.div`
  width: 60%;
  height: 100%;
  float: left;

  display: flex;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 100%;
    height: auto;
    float: none;
  }
`;


const TextWrapper = styled.div`
  width: 80%;
  height: 60%;


  align-self: center;

`;

const AboutHeader = styled.h2`
  font-weight: 400;

  margin: 25px 0 50px 0;

  text-align: center;
`;

const AboutText = styled.p`
  font-weight: 200;
  
  margin: 20px;

`;


const ImageHolder = styled.div`
  width: 40%;
  height: 100%;

  float: left;

  display: flex;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 100%;
    height: auto;
    float: none;
    padding: 20px;
  }
`;

const AboutImage = styled.img`
  max-width: 100%;
  max-height: 60%;

  align-self: center;

  border-radius: 50%;
  /* border: 10px solid #a8a8a8; */

  box-shadow: 0, 0, 8px, 4px, rgba(0, 0, 0, 1);

  @media (max-width: 1080px) {
    max-width: 30%;
  }

`;
