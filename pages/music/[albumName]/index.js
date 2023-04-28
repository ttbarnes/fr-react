import Head from 'next/head';
import ALBUMS from '../../../data/albums.json';
import CONSTANTS from '../../../constants';
import PageContainer from '../../../components/PageContainer';
import Album from '../../../components/Album';
import PageButtonLink from '../../../components/PageButtonLink';
import {
  cleanAlbumName,
  encodeAlbumName,
  getImagePath,
  mapAlbums
} from '../../../helpers/albums';

const AlbumPage = ({ albums }) => {
  const firstAlbum = albums[0];

  const metaTitle = `${firstAlbum.name} - Fiona Ross`;
  const metaDescription = firstAlbum.albumCredits ? firstAlbum.albumCredits[0] : CONSTANTS.META_TAGS.OG_DESCRIPTION;
  const metaUrl = `${CONSTANTS.BASE_URL}/music/${firstAlbum.formattedName}`;
  const metaImage = `${CONSTANTS.BASE_URL_REACT}/images/albums/social/${firstAlbum.imageName}.png`;

  return (
    <PageContainer>
      <div className='container with-page-bg-img'>

        <Head>
          <title>{metaTitle}</title>
          <meta name='description' content={metaDescription} />

          <meta property='og:title' content={metaTitle} />
          <meta property='og:description' content={metaDescription} />
          <meta property='og:url' content={metaUrl} />

          <meta property='og:image' content={metaImage} />
          <meta property='og:image:secure_url' content={metaImage} />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content={CONSTANTS.SOCIAL_MEDA_IMAGE_SIZE.WIDTH} />
          <meta property='og:image:height' content={CONSTANTS.SOCIAL_MEDA_IMAGE_SIZE.HEIGHT} />

          <meta name='twitter:title' content={metaTitle} />
          <meta name='twitter:description' content={metaDescription} />
          <meta property='twitter:url' content={metaUrl} />

          <meta name='twitter:image' content={metaImage} />
        </Head>

        <h1 className='hidden'>Albums</h1>

        {firstAlbum.hasBackgroundImage && (
          <img
            src={`/images/background/${firstAlbum.imageName}.png`}
            alt=''
            className={`page-img-bg ${firstAlbum.imageName}`}
            aria-hidden='true'
            role='presentation'
            style={{
              opacity: firstAlbum.backgroundImageOpacity ? firstAlbum.backgroundImageOpacity : 1
            }}
          />
        )}

        <div className='main-content container-small'>

          <ul className='no-list-style' aria-label='Albums'>
            {albums.map((album) => (
              <li key={album.name}>
                <Album {...album} />
              </li>
            ))}
          </ul>

          <PageButtonLink
            href={`${CONSTANTS.BASE_URL}/press`}
            text='Press'
          />

        </div>
      </div>
    </PageContainer>
  );
};

export async function getServerSideProps(context) {
  const { albumName } = context.query;

  let mappedAlbums = ALBUMS;

  if (albumName) {
    const albumNameDecoded = albumName.replace(/-/g, ' ')

    const album = ALBUMS.find((album) =>
      cleanAlbumName(album.name).toLowerCase() === albumNameDecoded.toLowerCase());

    if (!album) {
      return {
        redirect: {
          permanent: false,
          destination: '/error',
        },
        props: {},
      };
    }

    const allOtherAlbums = ALBUMS.filter((a) => a.name !== album.name);

    mappedAlbums = mapAlbums([
      album,
      ...allOtherAlbums
    ]);
  }

  return {
    props: {
      albums: mappedAlbums
    }
  };
}


export default AlbumPage;
