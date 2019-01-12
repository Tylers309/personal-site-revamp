import React, { Component } from 'react';

import styled from 'styled-components';

class Contact extends Component {

  render() {
    return(
      <Wrapper>
        <WrapperHolder>
          <WrapperLeft>
            <Header>Contact Me</Header>
            <Input type="text" name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="Email" />
            <Textarea placeholder="Message" />

            <Button>Send 🐑</Button>
          </WrapperLeft>
          

          <WrapperRight>

          </WrapperRight>
        </WrapperHolder>
      </Wrapper>
    )
  }
}

export default Contact;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;

  display: flex;
  justify-content: center;

`;

const WrapperHolder = styled.div`
  align-self: center;
  width: 50%;
  height: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
  
`;

const WrapperLeft = styled.div`
  width: 60%;
  height: 100%;

  float: left;
`;

const WrapperRight = styled(WrapperLeft)`
  width: 40%;
`;

const Header = styled.h1`
  color: #2f2e2e;
  font-size: 45px;
  font-weight: 100; 

  text-align: center;

  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 50%;

  padding: 12px 8px;

  display: block;

  margin: 25px auto;

  border: none;
  color: #2f2e2e;

  border-top: 2px solid #2f2e2e;
  border-bottom: 2px solid #2f2e2e;

  transition: 0.3s;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  &:hover {
    border-left: 2px solid #2f2e2e;
    border-right: 2px solid #2f2e2e;
  }
`;

const Textarea = styled.textarea`
  height: 50%;
  width: 100%;

  padding: 12px 8px;

  position: relative;

  resize: none;

  border: none;
  
  border-top: 2px solid #2f2e2e;
  border-bottom: 2px solid #2f2e2e;

  color: #2f2e2e;

  transition: 0.3s;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  &:hover {
    border-left: 2px solid #2f2e2e;
    border-right: 2px solid #2f2e2e;
  }

`;

const Button = styled.button`
  padding: 12px 32px;

  position: relative;

  display: block;

  margin: 25px auto;

  cursor: pointer;

  border: none;

  border-top: 2px solid #2f2e2e;
  border-bottom: 2px solid #2f2e2e;
  

  background-color: #fff;


  transition: 0.3s;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  &:hover {
    border-left: 2px solid #2f2e2e;
    border-right: 2px solid #2f2e2e;
  }
`;