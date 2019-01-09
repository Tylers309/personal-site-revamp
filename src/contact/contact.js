import React, { Component } from 'react';

import styled from 'styled-components';

class Contact extends Component {

  render() {
    return(
      <Wrapper>
        <WrapperHolder>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <Textarea placeholder="Message" />

          <Button>Send</Button>
        </WrapperHolder>
      </Wrapper>
    )
  }
}

export default Contact;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  position: relative;

  display: flex;
  justify-content: center;
`;

const WrapperHolder = styled.div`
  align-self: center;
  
`;

const Input = styled.input`
  width: 300px;

  padding: 12px 8px;

  display: block;

  margin: 25px auto;

  border: none;

  border-top: 4px solid #CECECE;
  border-bottom: 4px solid #CECECE;
`;

const Textarea = styled.textarea`
  height: 200px;
  width: 400px;

  padding: 12px 8px;

  position: relative;

  resize: none;

  border: none;

  border-top: 4px solid #CECECE;
  border-bottom: 4px solid #CECECE;

`;

const Button = styled.button`
  padding: 12px 12px;

  position: relative;

  display: block;

  margin: 25px auto;

  border: none;

  border-top: 4px solid #CECECE;
  border-bottom: 4px solid #CECECE;

  background-color: #fff;
`;