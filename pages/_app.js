import Head from 'next/head'
import Header from '../components/Header';
import BurgerMenu from '../components/BurgerMenu';
import StickySocialLinks from '../components/StickySocialLinks';
import Footer from '../components/Footer';
import styles from '../global.scss';

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <title>FR React</title>
    </Head>

    <Header />

    <BurgerMenu />

    <StickySocialLinks />

    <main>

      <Component {...pageProps} />
      
    </main>

    <Footer />

  </div>
);

export default App;
