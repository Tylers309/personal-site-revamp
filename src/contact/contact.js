import React, { Component } from 'react';

import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import instagram from './instagram.png';
import github from './github.png';
import caution from './caution.png';

class Contact extends Component {

  render() {
    return(
      <ScrollableAnchor id={'contact'}>

      
      <Wrapper>
        <WrapperHolder>
          <WrapperLeft>
            <FormContainer netlify>
              <Header>Contact Me</Header>
            <Input type="text" name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="Email" />
            <Textarea placeholder="Message" />

            <Button>Send 🐑</Button>

            </FormContainer>
            
            <LinksHolder>
              <ImgHolder>
              <a href="https://instagram.com/tylercodes" target="_blank"><Img src={instagram} alt="tylercodes" /></a>
              <a href="https://github.com/tylers309" target="_blank"><Img src={github} alt="Tylers309" /></a>
              
              </ImgHolder>
            </LinksHolder>
            
          </WrapperLeft>
          
        </WrapperHolder>
      </Wrapper>
      </ScrollableAnchor>
    )
  }
}

export default Contact;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;

  position: relative;

  display: flex;
  justify-content: center;


`;

const WrapperHolder = styled.div`
  align-self: center;
  width: 40%;
  height: 50%;

  position: relative;
  display: block;

  @media (max-width: 768px) {
    width: 80%;
  }
  
`;

const WrapperLeft = styled.div`
  width: 100%;
  height: 100%;

  float: left;
`;

const LinksHolder = styled.div`
  width: 100%;

  align-self: center;

  display: flex;
  justify-content: center;

  margin-bottom: 25px;
`;

const ImgHolder = styled.div`
  align-self: center;
`;

const Img = styled.img`
  height: 64px;
  width: 64px;

  display: block;
  float: left;

  margin: 15px;
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

  @media (max-width: 768px) {
    width: 75%;
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


const FormContainer = styled.form`
  position: relative;
`;

