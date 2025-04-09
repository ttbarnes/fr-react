import { gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import DISCOGRAPHY from '../../data/discography.json';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import {
  getImagePath,
  mapDiscography
} from '../../helpers';
import styles from './Discography.module.scss';

const DiscographyPage = ({ discography }) => (
  <PageContainer>
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.DISCOGRAPHY.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.DISCOGRAPHY.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.DISCOGRAPHY.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.DISCOGRAPHY.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.DISCOGRAPHY.URL} />
      </Head>

      <img
        src={'/images/background/sofa.png'}
        alt=''
        className='page-img-bg'
        aria-hidden='true'
        role='presentation'
      />

      <div className='main-content container-small'>
      
        <ul className='no-list-style' aria-label='Albums'>
          {discography.map((item) => (
            <li
              key={item.name}
              className={styles.listItem}
            >
              <Link
                href={`/discography/${item.formattedName}`}
                legacyBehavior
              >
                <a className={styles.listItemLink}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`/images/discography/${item.imageName}.jpg`}
                      alt={`Fiona Ross - ${item.name}`}
                      layout='responsive'
                      width='403'
                      height='403'
                      className={styles.image}
                    />
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  </PageContainer>
);

export async function getServerSideProps() {
  const mappedDiscography = mapDiscography(DISCOGRAPHY);

  return {
    props: {
      discography: mappedDiscography
    }
  };
}

export default DiscographyPage;
