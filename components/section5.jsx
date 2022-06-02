import styled from 'styled-components';
import Image from 'next/image';
import { data } from '../dataObject';
import Link from 'next/link';

const Wrapper = styled.section`
  display: grid;
  padding: 0 2.3rem;
  * {
    color: #292e3a;
  }
  @media (min-width: 70em) {
    grid-template-columns: auto auto;
    align-items: flex-start;
    padding: 0 16.4rem;
    gap: 5rem;
  }
`;

const Container = styled.div`
  margin-top: 5.4rem;
  display: grid;
  place-items: center;
  @media (min-width: 70em) {
    place-items: ${(props) => props.left && 'unset'};
    margin-top: 10rem;
  }
`;



const Title = styled.p`
  font-size: 3.4rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-top: 4.5rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
  max-width: 488px;
  @media (min-width: 70em) {
    text-align: ${(props) => props.left && 'unset'};
  }
`;



const Section5 = () => {
  const { section5 } = data;

  return (
    <Wrapper id='section5'>
      <Container left>
        <Title>{section5.title}</Title>
        <Text left dangerouslySetInnerHTML={{ __html: section5.content }} />
      </Container>
      <Container>
        <Image alt='logo' src='/imgs/section5.jpg' width='500px' height='311px'/>
      </Container>
    </Wrapper>
  );
};

export default Section5;
