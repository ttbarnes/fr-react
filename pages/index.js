import Head from 'next/head'
import Header from '../components/Header';
import StickySocialLinks from '../components/StickySocialLinks';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FR React</title>
      </Head>

      <Header />

      <StickySocialLinks />

      <main>
        
      </main>

      <Footer />

    </div>
  )
}
