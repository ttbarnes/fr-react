import Head from 'next/head';
import ALBUMS from '../../../data/albums.json';
import Album from '../../../components/Album';
import PageButtonLink from '../../../components/PageButtonLink';
import CONSTANTS from '../../../constants';

const AlbumPage = ({ albums, contextQuery, contextParams }) => {
  const firstAlbum = {};
  // const firstAlbum = albums[0];

  // const metaTitle = `${firstAlbum.name} - Fiona Ross`;
  // const metaDescription = firstAlbum.albumCredits ? firstAlbum.albumCredits[0] : CONSTANTS.META_TAGS.OG_DESCRIPTION;
  // const metaUrl = `${CONSTANTS.BASE_URL}/music/${firstAlbum.formattedName}`;
  // const metaImage = `${CONSTANTS.BASE_URL}/images/albums/${firstAlbum.imageName}.jpg`;
  // const metaImageWidth = CONSTANTS.ALBUM_COVER_IMAGE_SIZES[firstAlbum.imageName].WIDTH;
  // const metaImageHeight = CONSTANTS.ALBUM_COVER_IMAGE_SIZES[firstAlbum.imageName].HEIGHT;

  return (
    <div className='container with-page-bg-img'>

      <div>albums count: {albums.length}</div>
      <div>contextQuery: {JSON.stringify(contextQuery)}</div>
      <div>contextParams: {JSON.stringify(contextParams)}</div>

      {/*
        <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />

        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:url' content={metaUrl} />

        <meta property='og:image' content={metaImage} />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content={metaImageWidth} />
        <meta property='og:image:height' content={metaImageHeight} />

        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
        <meta property='twitter:url' content={metaUrl} />

        <meta name='twitter:image' content={metaImage} />
      </Head>
      */}

      <h1 className='hidden'>Albums</h1>

      <img
        src={`/images/background/${firstAlbum.imageName}.png`}
        alt=''
        className={`page-img-bg ${firstAlbum.imageName}`}
        aria-hidden='true'
      />

      <div className='main-content container-small'>

        <ul aria-label='Albums'>
          {albums.map((album) => (
            <li key={album.name}>
              <Album {...album} />
            </li>
          ))}
        </ul>

        <PageButtonLink
          href='/press'
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
  cleanAlbumName(albumName).replaceAll(' ', '-').toLowerCase();

export async function getServerSideProps(context) {
  const { albumName } = context.query;

  let sortedAlbums = ALBUMS;

  if (albumName) {
    const albumNameDecoded = albumName.replaceAll('-', ' ')

    const album = ALBUMS.find((album) =>
      cleanAlbumName(album.name).toLowerCase() === albumNameDecoded.toLowerCase()
    );

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
      albums: sortedAlbums,
      contextQuery: context.query,
      contextParams: context.params
    }
  };
}


export default AlbumPage;
