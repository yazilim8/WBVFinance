import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../dataObject';
import { scrollTo } from './scroll';

const Wrapper = styled.footer`
  background: #000000;
`;

const Padding = styled.div`
  padding: 5rem 1rem 4rem 1rem;
  display: grid;
  place-items: center;
  @media (min-width: 70em) {
    grid-auto-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 7rem;
    padding: 2.6rem 2rem 4.5rem 2rem;
  }
`;

const UnOrderedList = styled.ul`
  margin-top: 4rem;
  display: grid;
  gap: 2rem;
  color: #f2f2f2;
  list-style: none;
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  @media (min-width: 70em) {
    grid-template-columns: auto auto;
    margin-top: unset;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  border-bottom: 1px dashed #333333;
  width: 90vw;
  padding-bottom: 2rem;
  transition: 0.3s;
  &:hover {
    opacity: 60%;
  }
  @media (min-width: 70em) {
    width: 100%;
    text-align: left;
    padding-bottom: 1rem;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 3.5rem;
  gap: 0.5rem;
  @media (min-width: 70em) {
    margin-top: unset;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  padding-bottom: 1.5 rem;
`;
const ContactText = styled.p`
  color: #f2f2f2;
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  padding-bottom: 1.5 rem;
`;

const SocialWrapper = styled.div`
  margin-top: 3.5rem;
  display: grid;
  place-items: center;
  p {
    color: #f2f2f2;
    font-weight: 700;
  }

  div {
    margin-top: 2.3rem;
    display: flex;
    gap: 1.5rem;
  }

  i {
    color: #f2f2f2;
    font-size: 2.8rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 60%;
    }
  }
  @media (min-width: 70em) {
    margin-top: 0rem;
    div {
      margin-top: 0rem;
    }
  }
`;

const Text = styled.p`
  color: #f2f2f2;
  font-weight: 300;
  margin-top: 2.5rem;
  @media (min-width: 70em) {
    margin-top: 0rem;
  }
`;

const LicenseWrapper = styled.div`
  background: #333333;
  text-align: center;
  padding: 1.9rem 2.8rem;
`;

const LicenseText = styled.p`
  color: #f2f2f2;
  line-height: 21px;
`;
const Button = styled.div`
  width: 100%;
  margin-top: 5rem;
  font-weight: 400;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #bdbdbd;
  * {
    color: #2f80ed;
  }
  @media (min-width: 50em) {
    max-width: 255px;
  }
`;

const ButtonText = styled.p`
  font-size: 2.2rem;
  cursor: pointer;
`;

const Footer = () => {
  const { footer } = data;
  const { list, contact, copyright, license} = footer;

  return (
    <Wrapper>
      <Padding>
        <Image alt='' width='153px' height='67px' src={'/logoblack.png'} />


        <UnOrderedList>
          {list.map((item, index) => (

            <ListItem onClick={() => scrollTo(index)} key={index}>{item.name}</ListItem>
          ))}
          <ListItem><Link href="/privacy-policy"><a style={{ color:'white', textDecoration:'none' }}>Privacy Policy</a></Link></ListItem>
        </UnOrderedList>

        <ContactWrapper>
          {contact.map((item, index) => (
            <ContactContainer key={index} style={{marginBottom:'10px'}}>
              <ContactText bold>{item.name}:</ContactText>
              <ContactText>{item.text}</ContactText>
            </ContactContainer>
          ))}
        </ContactWrapper>

        <Text>{copyright.text}</Text>
      </Padding>
      <LicenseWrapper>
        <LicenseText>{license.text}</LicenseText>
      </LicenseWrapper>
    </Wrapper>
  );
};

export default Footer;
