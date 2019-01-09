import React, { Component } from 'react';

import styled from 'styled-components';

class Skills extends Component {

  render() {
    return(
      <Wrapper>
        <OpenB />
          <Key>"developer"</Key>: <OpenB inline/>
          
          <br />

            <Key>"stats"</Key>: <OpenB inline/>
            <br />
              <Key>"firstName"</Key>: <Value>"John"</Value>, <br />
              <Key>"middleName"</Key>: <Value>"Tyler"</Value>,<br />
              <Key>"lastName"</Key>: <Value>"Sutton</Value>, <br />
              <Key>"age"</Key>: <Value>17.5</Value> <br />
            <CloseB inline/>, <br />

            <Key>"skills"</Key>: <OpenB inline />
            <br />
              <Key>"years"</Key>: <Value>2</Value>, <br />
              <Key>"frontEnd"</Key>: [<Value>"html"</Value>, <Value>"css"</Value>, <Value>"javascript"</Value>, <Value>"react"</Value>, <Value>"jquery"</Value>], <br />
              <Key>"backend"</Key>: [<Value>"node"</Value>, <Value>"express"</Value>, <Value>"sql"</Value>, <Value>"php"</Value>], <br />
              <Key>"design"</Key>: [<Value>"pencil"</Value>, <Value>"papaer"</Value>, <Value>"adobeXd"</Value>]
            <CloseB />
          <CloseB/>
      </Wrapper>
    );
  }
}

export default Skills;


const OpenB = (props) => props.inline ? <span>{`{`}</span> : <p>{`{`}</p>
const CloseB = (props) => props.inline ? <span>{`}`}</span> : <p>{`}`}</p>

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  position: relative;

  background-color: #282C34;
// this color is for the {} and : and ,
  color: #ABB2BF;

  font-size: 20px;

  padding: 5% 20px;
`;

const Key = styled.span`

color: #E06C75;
`;

const Value = styled.span`
  color: #98C379;
`;