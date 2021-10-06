import Head from 'next/head';
import ALBUMS from '../../../data/albums.json';
import Album from '../../../components/Album';
import PageButtonLink from '../../../components/PageButtonLink';
import CONSTANTS from '../../../constants';

const AlbumPage = ({ albums }) => {
  const firstAlbum = albums[0];

  const metaTitle = `${firstAlbum.name} - Fiona Ross`;
  const metaDescription = firstAlbum.albumCredits ? firstAlbum.albumCredits[0] : CONSTANTS.META_TAGS.OG_DESCRIPTION;
  const metaUrl = `${CONSTANTS.BASE_URL}/music/${firstAlbum.formattedName}`;
  const metaImage = `${CONSTANTS.BASE_URL}/images/albums/social/${firstAlbum.imageName}.png`;

  return (
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
          style={{
            opacity: firstAlbum.backgroundImageOpacity ? firstAlbum.backgroundImageOpacity : 1
          }}
        />
      )}

      <div className='main-content container-small'>

        <ul aria-label='Albums'>
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
  );
};

// strip commas and brackets
const cleanAlbumName = (albumName) =>
  albumName.replace(/,|\(|\)/g, '');

const encodeAlbumName = (albumName) =>
  cleanAlbumName(albumName)
    .replace(/ /g, '-');

const getImagePath = (albumName) =>
  cleanAlbumName(albumName).replace(/\s/g, '-').toLowerCase();

export async function getServerSideProps(context) {
  const { albumName } = context.query;

  let sortedAlbums = ALBUMS;

  if (albumName) {
    const albumNameDecoded = albumName.replace(/-/g, ' ')

    const album = ALBUMS.find((album) =>
      cleanAlbumName(album.name).toLowerCase() === albumNameDecoded.toLowerCase()
    );

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

    sortedAlbums = [
      album,
      ...allOtherAlbums
    ];

    sortedAlbums.map((a) => {
      const album = a;

      album.imageName = getImagePath(album.name);
      album.formattedName = encodeAlbumName(album.name);

      return album;
    });
  }

  return {
    props: {
      albums: sortedAlbums
    }
  };
}


export default AlbumPage;
