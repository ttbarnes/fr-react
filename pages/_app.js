import Head from 'next/head';
import Script from 'next/script';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import { useState } from 'react';
import Header from '../components/Header';
import BurgerMenu from '../components/BurgerMenu';
import StickySocialLinks from '../components/StickySocialLinks';
import Footer from '../components/Footer';
import CONSTANTS from '../constants';
import styles from '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  const [hasCookieConsent, setHasCookieConsent] = useState(false);
  const cookieConsent = getCookieConsentValue();

  if (cookieConsent === true || cookieConsent === false) {
    setHasCookieConsent(cookieConsent);
  }

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
        <meta name='msapplication-TileColor' content='#000' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
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

        <meta name='google-site-verification' content={CONSTANTS.META_TAGS.GOOGLE_SITE_VERIFICATION_1} />
        <meta name='google-site-verification' content={CONSTANTS.META_TAGS.GOOGLE_SITE_VERIFICATION_2} />
        <meta name='google-site-verification' content={CONSTANTS.META_TAGS.GOOGLE_SITE_VERIFICATION_3} />
        <meta name='msvalidate.01' content={CONSTANTS.META_TAGS.MICROSOFT_VERFICATION} />


        {/* favicon's generated via favicon-generator.org */}
        <link rel='apple-touch-icon' sizes='57x57' href={`${CONSTANTS.BASE_URL}/apple-icon-57x57.png`} />
        <link rel='apple-touch-icon' sizes='60x60' href={`${CONSTANTS.BASE_URL}/apple-icon-60x60.png`} />
        <link rel='apple-touch-icon' sizes='72x72' href={`${CONSTANTS.BASE_URL}/apple-icon-72x72.png`} />
        <link rel='apple-touch-icon' sizes='76x76' href={`${CONSTANTS.BASE_URL}/apple-icon-76x76.png`} />
        <link rel='apple-touch-icon' sizes='114x114' href={`${CONSTANTS.BASE_URL}/apple-icon-114x114.png`} />
        <link rel='apple-touch-icon' sizes='120x120' href={`${CONSTANTS.BASE_URL}/apple-icon-120x120.png`} />
        <link rel='apple-touch-icon' sizes='144x144' href={`${CONSTANTS.BASE_URL}/apple-icon-144x144.png`} />
        <link rel='apple-touch-icon' sizes='152x152' href={`${CONSTANTS.BASE_URL}/apple-icon-152x152.png`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${CONSTANTS.BASE_URL}/apple-icon-180x180.png`} />
        <link rel='icon' type='image/png' sizes='192x192' href={`${CONSTANTS.BASE_URL}/android-icon-192x192.png`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`${CONSTANTS.BASE_URL}/favicon-32x32.png`} />
        <link rel='icon' type='image/png' sizes='96x96' href={`${CONSTANTS.BASE_URL}/favicon-96x96.png`} />
        <link rel='icon' type='image/png' sizes='16x16' href={`${CONSTANTS.BASE_URL}/favicon-16x16.png`} />
        <link rel='shortcut icon' href={`${CONSTANTS.BASE_URL}/favicon.ico`} type='image/x-icon' />
      </Head>

      <Header />

      <BurgerMenu />

      <StickySocialLinks />

      <main>

        <Component
          {...pageProps}
          cookieConsent={cookieConsent}
        />
        
      </main>

      <Footer />

      <CookieConsent
        enableDeclineButton
        onAccept={() => {
          setHasCookieConsent(true);
        }}
        containerClasses='cookie-consent'
        disableButtonStyles
        buttonText='Accept'
        declineButtonText='Decline'
        flipButtons
        buttonClasses='button-accept'
        declineButtonClasses='button-decline'
      >This website uses cookies to enhance the user experience.
      </CookieConsent>

      {hasCookieConsent && (
        <Script
          id='google-analytics'
          strategy='afterInteractive'
        >
          {`
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', '${process.env.GOOGLE_ANALYTICS}', 'auto', {
                'cookieExpires': 0,
                'storage': 'none'
              });
              ga('set', 'anonymizeIp', true);
              `}
        </Script>
      )}

    </div>
  );
};

export default App;
