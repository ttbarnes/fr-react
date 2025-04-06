import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CONSTANTS from '../constants';
import DISCOGRAPHY from '../data/discography.json';
import { mapDiscography } from '../discography';
import PageContainer from '../components/PageContainer';
import HomePageQuote from '../components/HomePageQuote';
import Album from '../components/Album';
import PageButtonLink from '../components/PageButtonLink';
import styles from './Home.module.scss';

const HomePage = () => {
  const mappedAlbums = mapDiscography(DISCOGRAPHY);
  const latestAlbum = mappedAlbums[0];

  return (
    <PageContainer>
      <div className='container with-page-bg-img'>

        <Head>
          <title>{CONSTANTS.PAGE.HOME.TITLE}</title>

          <meta property='og:title' content={CONSTANTS.PAGE.HOME.TITLE} />
          <meta property='og:url' content={CONSTANTS.PAGE.HOME.URL} />

          <meta name='twitter:title' content={CONSTANTS.PAGE.HOME.TITLE} />
          <meta property='twitter:url' content={CONSTANTS.PAGE.HOME.URL} />
        </Head>

        <img
          src={'/images/background/red-flags-and-high-heels.png'}
          alt=''
          className={`page-img-bg ${styles.bgImage}`}
          aria-hidden='true'
        />

        <div className='main-content container-small'>
          
          <div className={`row ${styles.introContainer}`}>
            <h1 className={styles.introHeading}>Fiona Ross</h1>
            <p className={styles.introSubHeading}>Award Winning Vocalist, Pianist, Composer, Producer and Journalist</p>
          </div>

          <div className={`row ${styles.imageAndQuotesContainer}`}>
            <div className={`col-40-lg ${styles.imageContainer}`}>
              <Image
                src='/images/home/Fiona-Ross.jpg'
                alt=''
                aria-hidden='true'
                role='presentation'
                width={348}
                height={425}
              />
            </div>

            <div className='col-60-md'>

              <div className={`col-80-lg ${styles.quotesContainer}`}>
                <HomePageQuote
                  copy='Technical virtuosity and that raw emotional drive, of an artist at the height of her game'
                  author='Jazz Quarterly'
                />

                <HomePageQuote
                  copy='Fierce and Non-Compliant, and honest and true and oh so very talented'
                  author='Maxine Gordon'
                />

                <HomePageQuote
                  copy='Fiona Ross knows how to make an album'
                  author='Jazz Views'
                />

                <HomePageQuote
                  copy='Her talents are simply extraordinary'
                  author='Kind Of Jazz'
                  isLast
                />
              </div>

            </div>
          </div>

          <Album {...latestAlbum} />

          {/*
          <div className={`row text-align-center ${styles.videoContainer}`}>
            <h3 className={styles.videoHeading}>
              <Link href='/discography/Red-Flags-and-High-Heels'>Red Flags and High Heels - out now</Link>
            </h3>

            <div className={styles.iframeContainer}>
              <iframe src="https://www.youtube.com/embed/Fi3fFgw1IlU" title="Red Flags and High Heels Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="400" height="415" frameBorder="0"></iframe>
            </div>

            <p>
              <Link
                href='/discography/Red-Flags-and-High-Heels'>
                <a className={`link-highlight-hover-border ${styles.findOutMore}`}>Find out more</a>
              </Link>
            </p>
          </div>
          */}

          <div className='row text-align-center'>
            <h3>Gigs and announcements</h3>

            <p>Your email won't be used for anything else.</p>
              
            <p>
              <Link
                href={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
                legacyBehavior
              >
                <a
                  className={`link-highlight-hover-border ${styles.findOutMore}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >Fiona Ross mailing list</a>
              </Link>
            </p>

            <br />
          </div>

          <PageButtonLink
            href={`${CONSTANTS.BASE_URL}/discography`}
            text='View discography'
          />

        </div>

      </div>
    </PageContainer>
  );
};

export default HomePage;
