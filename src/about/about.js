import React, { Component } from 'react';

import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import luke from './pictures/luke.JPG';
import tylerRaptor from './pictures/tylerRaptor.JPG';

import './hex.css';

class About extends Component {
  
  render() {
    return (
      <ScrollableAnchor id={'about'}>
        <Wrapper>
          <AboutLeft>
            <LeftHolder>
              <Header>About the guy behind the <code>&lt;code/&gt;</code></Header>
              <AboutText>
                {/* Hi, I am Tyler Sutton! I am a 17 year old Website Designer and Developer.
                I started my journey into this awesome world of development all over one 
                thought about how the internet works. I read an article about the basics of the internet (ip addresses, servers) on <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" target="_blank">MDN</a>.
                I read and read, not fully understanding it all, but still enjoying having someone able to answer my questions. I read some more until I stumbled upon a link
                on <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank">how to build a website</a>. I had heard of coding and actually
                taken a course in Visual Basic and C# *Yawn* but creating ugly calculators really didn't appeal to my 14 year old mind, until I discovered how easy it is to make beautiful websites. 
                I read all of Mozilla's articles read all of W3 schools articles on HTMl, CSS, Javascript and did all the tutorials I could find. And I started to code my own sites. The first (dozen) sites were (really) bad 
                but I kept on and grew more and more fond of the idea of sharing knowledge via the internet and I wanted to be a part of it more and more. So I created more and more test websites till I created my own and for 
                friends and family. I keep refining my skills everyday. (In fact, this site you are on is it's third full iteration!) I hope you have found my story entertaining, that you understand a little more about me and my journey, and maybe help inspire you to start your own.  */}

                My name is Tyler Sutton I am a Front and Backend Developer from Meridian, 
                Mississippi. I have been making websites for over two years now and 
                am always looking to improve my skillset. As well as being a web developer I 
                love to play the guitar 🎸 and video games 🎮
              </AboutText>
            </LeftHolder>
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
                  <Img src={tylerRaptor} alt="kajsdlkfj" />
                </Hexagon>                


                <Hexagon >
                  <Img src={luke} alt="Tyler Sutton" />
                </Hexagon>
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
      </ScrollableAnchor>
    );
  }
}

export default About;


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;


`;

const AboutLeft = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;

  float: left;

  @media (max-width: 768px) {
    width: 100%;

    height: 50%;
    width: 100%;
  }

`;

const LeftHolder = styled.div`
  align-self: center;

  max-width: 70%;
`;

const Header = styled.h2`
  font-size: 42px;
  font-weight: 100;

  color: #2f2e2e;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const AboutText = styled.p`
  font-size: 19px;
  font-weight: 100;
  padding: 50px 50px;
  letter-spacing: .20px;

  color: #2f2e2e;

  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 0;
    padding: 50px 0;
  }
`;









// start About right hexagons

const AboutRight = styled(AboutLeft)`
  width: 50%;
`;


const RightHolder = styled.div`
  align-self: center;
`;


const Hexagon = styled.div`
  // original 100px
  width: 200px;
  height: 200px;
  background: #e8e8e8;
  position: relative;
  float: left;

  
  

  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const EmptyHex = styled(Hexagon)`
  background: #fff;

`;
const HexTopRow = styled.div`
  //original 75px
  height: 150px;
  width: auto;

  @media (max-width: 768px) {
    height: 75px;
  }
`;


const HexMidRow = styled(HexTopRow)`
  // original 50px
  padding-left: 100px;
  
  //original 25px
  transform: translateY(-50px);

  @media (max-width: 768px) {
    padding-left: 50px;
    transform: translateY(-25px);
  }
`;

const HexBotRow = styled(HexTopRow)`
  //original 50px
  transform: translateY(-100px);

  @media (max-width: 768px) {
    transform: translateY(-50px);
  }
`;

const Img = styled.img`
 height: auto;
 max-width: 100%;

 position: absolute
`;