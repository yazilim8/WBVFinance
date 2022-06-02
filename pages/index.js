import Head from 'next/head';
import About from '../components/About';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  const title = 'NEWS';

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <title>WBV FINANCE</title>
      </Head>
      <Header />
      <main>
        <article>
          <Hero title={title} />
          <div style={{ maxWidth: '1440px', margin: '0 auto', marginBottom: '30px' }}>
            <About />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </div>
          <Footer />
        </article>
      </main>
    </>
  );
}
