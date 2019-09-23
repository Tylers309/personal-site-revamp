import React, { Component } from 'react';

import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

class Skills extends Component {

  render() {
    return(
      <ScrollableAnchor id={'skills'}>
        <Wrapper>
          

            <WrapperLeft>
              <SkillsHolder>
                <OpenB />
                  <Padding /><Key>"developer"</Key>: <OpenB inline/>
                  
                  <br />

                  <Padding /><Padding /><Key>"stats"</Key>: <OpenB inline/>
                    <br />
                    <Padding /><Padding /><Padding /><Key>"firstName"</Key>: <Value>"John"</Value>, <br />
                    <Padding /><Padding /><Padding /><Key>"middleName"</Key>: <Value>"Tyler"</Value>,<br />
                    <Padding /><Padding /><Padding /><Key>"lastName"</Key>: <Value>"Sutton</Value>, <br />
                    <Padding /><Padding /><Padding /><Key>"age"</Key>: <Value>18</Value> <br />
                    <Padding /><Padding /><CloseB inline/>, <br /><br />

                    <Padding /><Padding /><Key>"skills"</Key>: <OpenB inline />
                    <br />
                    <Padding /><Padding /><Padding /><Key>"years"</Key>: <Value>2</Value>, <br />
                    <Padding /><Padding /><Padding /><Key>"frontEnd"</Key>: [<Value>"html"</Value>, <Value>"css"</Value>, <Value>"javascript"</Value>, <Value>"react"</Value>, <Value>"jquery"</Value>], <br />
                    <Padding /><Padding /><Padding /><Key>"backend"</Key>: [<Value>"node"</Value>, <Value>"express"</Value>, <Value>"sql"</Value>, <Value>"php"</Value>], <br />
                    <Padding /><Padding /><Padding /><Key>"design"</Key>: [<Value>"pencil"</Value>, <Value>"paper"</Value>, <Value>"adobeXd"</Value>]<br />
                    <Padding /><Padding /><CloseB inline/> <br />
                    
                  <Padding /><CloseB inline/>
                <CloseB />
              </SkillsHolder>
            </WrapperLeft>

            <WrapperRight>

              <RightHolder>
                <Header>My Skills</Header>

                <RightText>
                  Over the past two years of creating websites I have transitioned from creating sites 
                  only on the frontend to creating intricate backends as well as frontends. My skillset 
                  has increased dramatically so anything that you need I can tackle and give you a working solution.
                  But all this talk is worth nothing without some actual code, right? Here's my <a href="https://github.com/Tylers309/" target="_blank">Github</a>. 
                  Feel free to contribute to anything that strikes your interest!
                </RightText>
              </RightHolder>

            </WrapperRight>
            
          
        </Wrapper>
      </ScrollableAnchor>
    );
  }
}

export default Skills;


const OpenB = (props) => props.inline ? <span>{`{`}</span> : <p>{`{`}</p>
const CloseB = (props) => props.inline ? <span>{`}`}</span> : <p>{`}`}</p>

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;

  background-color: #fff;
// this color is for the {} and : and ,
  color: #ABB2BF;


  font-size: 24px;
  line-height: 1.3;

  padding: 5% 20px;
 

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const WrapperLeft = styled.div`
  width: 50%;
  height: 100%;

  float: left;

  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    height: 50%;
    width: 100%;
  }
`;

const WrapperRight = styled(WrapperLeft)``;

const SkillsHolder = styled.div`
  align-self: center;
  width: 95%;
  height: auto;

  padding: 25px 25px 25px 25px;

  border-radius: 20px;

  -webkit-box-shadow: 0px 0px 36px 4px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 36px 4px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 36px 4px rgba(0,0,0,0.2);

  background-color: #282C34;

  @media (max-width: 768px) {
    padding: 10px 0 10px 10px;

    width: 95%;
  }


`;

const Key = styled.span` color: #E06C75; `;

const Value = styled.span` 
  color: #98C379; 
`;



const Padding = styled.div`
  width: 20px;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 5px;
  }
`;




const RightHolder = styled.div`
  align-self: center;
`;

const Header = styled.h1`
  font-size: 45px;
  font-weight: 100;

  text-align: center;

  margin: 50px 0;
  color: #2f2e2e;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const RightText = styled.p`
  font-size: 19px;
  font-weight: 100;

  width: 70%;

  padding: 0 50px;

  margin: 0 auto;

  color: #2f2e2e;

  @media (max-width: 768px) {
    font-size: 14px;

    padding: 0;
  }
`;
