import Head from 'next/head'
import Header from '../components/Header';
import BurgerMenu from '../components/BurgerMenu';
import StickySocialLinks from '../components/StickySocialLinks';
import Footer from '../components/Footer';
import CONSTANTS from '../constants';
import styles from '../global.scss';

const App = ({ Component, pageProps }) => {
  const metaImage = `${CONSTANTS.BASE_URL}/images/albums/${CONSTANTS.META_TAGS.OG_IMAGE}`;

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>{CONSTANTS.META_TAGS.TITLE}</title>
        <meta name='description' content={CONSTANTS.META_TAGS.DESCRIPTION} />
        <meta name='author' content={CONSTANTS.META_TAGS.AUTHOR} />

        <meta name='viewport' content='height=device-height,width=device-width,initial-scale=1.0' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='theme-color' content='#000' />


        <meta property='og:locale' content='en_GB' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={CONSTANTS.BASE_URL} />
        <meta property='fb:app_id' content={CONSTANTS.META_TAGS.FACEBOOK_APP_ID} />


        <meta name='twitter:card' content={CONSTANTS.META_TAGS.TWITTER_CARD} />
        <meta property='twitter:domain' content={CONSTANTS.BASE_URL} />

        <meta property='og:title' content={CONSTANTS.META_TAGS.TITLE} />
        <meta property='og:description' content={CONSTANTS.META_TAGS.DESCRIPTION} />
        <meta property='og:url' content={CONSTANTS.BASE_URL} />

        <meta property='og:image' content={metaImage} />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta name='twitter:title' content={CONSTANTS.META_TAGS.TITLE} />
        <meta name='twitter:description' content={CONSTANTS.META_TAGS.DESCRIPTION} />
        <meta property='twitter:url' content={CONSTANTS.BASE_URL} />

        <meta name='twitter:image' content={metaImage} />

        <meta name='google-site-verification' content={CONSTANTS.META_TAGS.GOOGLE_SITE_VERIFICATION_1} />
        <meta name='google-site-verification' content={CONSTANTS.META_TAGS.GOOGLE_SITE_VERIFICATION_2} />
        <meta name='google-site-verification' content={CONSTANTS.META_TAGS.GOOGLE_SITE_VERIFICATION_3} />
        <meta name='msvalidate.01' content={CONSTANTS.META_TAGS.MICROSOFT_VERFICATION} />
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
};

export default App;
