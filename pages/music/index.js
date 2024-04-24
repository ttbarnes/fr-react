import { gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ALBUMS from '../../data/albums.json';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import {
  encodeAlbumName,
  getImagePath,
  mapAlbums
} from '../../helpers/albums';
import styles from './Music.module.scss';

const MusicPage = ({ albums }) => (
  <PageContainer>
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.MUSIC.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.MUSIC.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.MUSIC.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.MUSIC.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.MUSIC.URL} />
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
          {albums.map((album) => (
            <li
              key={album.name}
              className={styles.listItem}
            >
              <Link
                href={`/music/${album.formattedName}`}
                legacyBehavior
              >
                <a className={styles.listItemLink}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={`/images/albums/${album.imageName}.jpg`}
                      alt={`Fiona Ross - ${album.name}`}
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
  const mappedAlbums = mapAlbums(ALBUMS);

  return {
    props: {
      albums: mappedAlbums
    }
  };
}

export default MusicPage;
