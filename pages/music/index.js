import { gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import ALBUMS from '../../data/albums.json';
import CONSTANTS from '../../constants';
import {
  encodeAlbumName,
  getImagePath,
  mapAlbums
} from '../../helpers/albums';
import styles from './Music.module.scss';

const MusicPage = ({ albums }) => (
  <div className='container'>

    <Head>
      <title>{CONSTANTS.PAGE.MUSIC.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.MUSIC.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.MUSIC.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.MUSIC.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.MUSIC.URL} />
    </Head>

    <div className='main-content container-small'>
    
      <ul className='no-list-style' aria-label='Albums'>
        {albums.map((album) => (
          <li
            key={album.name}
            className={styles.listItem}
          >
            <Link href={`/music/${album.formattedName}`}>
              <a>
                <img
                  src={`/images/albums/${album.imageName}.jpg`}
                  alt={`Fiona Ross - ${album.name}`}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  </div>
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
