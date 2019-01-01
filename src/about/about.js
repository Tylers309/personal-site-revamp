import React, { Component } from 'react';

import styled from 'styled-components';

import luke from './pictures/luke.JPG';
import tylerRaptor from './pictures/tylerRaptor.JPG';

import './hex.css';

class About extends Component {
  
  render() {
    return (
      <Wrapper>
        <AboutLeft>

        </AboutLeft>

        <AboutRight>
          <RightHolder>
            <HexTopRow>
              <Hexagon>
                <Img src={luke} alt="Tyler Sutton" />
              </Hexagon>
              <EmptyHex />
              <Hexagon>
                <Img src={tylerRaptor} alt="Tyler Sutton standing in front of a F-22 Raptor" />
              </Hexagon>
            </HexTopRow>
            <HexMidRow>
              <Hexagon>
              </Hexagon>
              <Hexagon />
              <Hexagon>
              </Hexagon>
            </HexMidRow>
            <HexBotRow>
              <EmptyHex />
              
              <Hexagon>

              </Hexagon>  
              <Hexagon>

              </Hexagon>
            </HexBotRow>

          </RightHolder>
        </AboutRight>
      </Wrapper>
    );
  }
}

export default About;


const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const AboutLeft = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;

  float: left;

`;

const AboutRight = styled(AboutLeft)`
  width: 50%;
`;


const RightHolder = styled.div`
  align-self: center;
`;


const Hexagon = styled.div`

  width: 200px;
  height: 200px;
  background: #e8e8e8;
  position: relative;
  float: left;

  
  

  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const EmptyHex = styled(Hexagon)`
  background: #fff;

`;
const HexTopRow = styled.div`
  height: 150px;
  width: auto;

`;


const HexMidRow = styled(HexTopRow)`
  padding-left: 100px;
  
  transform: translateY(-50px);
`;

const HexBotRow = styled(HexTopRow)`
  transform: translateY(-100px);
`;

const Img = styled.img`
 height: auto;
 max-width 100%;

 position: absolute
`;