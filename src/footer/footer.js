import React, { Component } from 'react';

import styled from 'styled-components';


class Footer extends Component {
  
  render() {
    return (
      <Wrapper>
        <WrapperHolder>
          <FooterLeft>
            <FooterLeftHolder>
              Follow me on
              <LinksHolder>
                <Link href="https://www.instagram.com/tylercodes/" target="_blank">Instagram</Link>
              </LinksHolder>
            </FooterLeftHolder>
          </FooterLeft>

          <FooterRight>

          </FooterRight>
        </WrapperHolder>
      </Wrapper>
    );
  }
}

export default Footer;


const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;

  position: relative;

  display: flex;
  justify-content: center;

  background-color: #2f2e2e;
`;

const WrapperHolder = styled.div`
  height: 80%;
  width: 90%;

  align-self: center;

  border: 2px solid blue;

`;


const FooterLeft = styled.div`
  height: 50%;
  width: 100%;

  float: left;

  display: flex;
  justify-content: center;

  border: 2px solid red;
`;

const FooterRight = styled(FooterLeft)``;


const FooterLeftHolder = styled.div`
  align-self: center;
`;

const LinksHolder = styled.div`

`;

const Link = styled.a`
  color: #fff;

  text-decoration: none;  
`;