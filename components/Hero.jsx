import styled from 'styled-components';
import Image from 'next/image';
import { data } from '../dataObject';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 800px;
  background-image: url('/BG.jpg');
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 5rem;
`;

const Text = styled.p`
  font-size: 4.4rem;
  line-height: 4.4rem;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-weight: 400;
  strong {
    font-weight: 700;
  }
`;

const Hero = ({ title }) => {
  const { hero } = data;

  return (
    <Wrapper className='container_pd'>
      <Container>
        <Image
          alt='logo'
          src='/logohero.png'
          width='228px'
          height='100px'
          objectFit='cover'
        />
        <Text dangerouslySetInnerHTML={{ __html: hero.text }} />
      </Container>
    </Wrapper>
  );
};

export default Hero;
