import Head from 'next/head';
import ALBUMS from '../../../data/albums.json';
import BlockQuote from '../../../components/BlockQuote';
import PageButtonLink from '../../../components/PageButtonLink';
import CONSTANTS from '../../../constants';

const AlbumReviewsPage = ({ album }) => {
  const metaTitle = `${album.name} - Reviews - Fiona Ross`;
  const metaDescription = album.albumCredits ? album.albumCredits[0] : CONSTANTS.META_TAGS.OG_DESCRIPTION;
  const metaUrl = `${CONSTANTS.BASE_URL}/music/${album.formattedName}`;
  const metaImage = `${CONSTANTS.BASE_URL}/images/albums/social/${album.imageName}.png`;

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
    
      <img
        src={`/images/background/${album.imageName}.png`}
        alt=''
        className={`page-img-bg ${album.imageName}`}
        aria-hidden='true'
      />

      <div className='main-content container-large'>

        <h1 className='text-align-center'>{album.name} reviews</h1>

        <ul>
          {album.quotes.map((quote) => (
            <li key={quote.author}>
              <BlockQuote
                copy={quote.copy}
                author={quote.author}
                isLarge
              />
            </li>
          ))}
        </ul>

        <PageButtonLink
          href='/music'
          text='Music'
        />

      </div>
    </div>
  );
};


// strip commas and brackets
const cleanAlbumName = (albumName) =>
  albumName.replace(/,|\(|\)/g, '');

const getImagePath = (albumName) =>
  cleanAlbumName(albumName).replace(/\s/g, '-').toLowerCase();

export async function getServerSideProps(context) {
  const { albumName } = context.query;

  const albumNameDecoded = albumName.replace(/-/g, ' ')

  const album = ALBUMS.find((album) =>
    cleanAlbumName(album.name).toLowerCase() === albumNameDecoded.toLowerCase()
  );

  if (!album
    || (album && !album.renderReviewsPage)) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
      props: {},
    };
  }

  album.imageName = getImagePath(album.name);
  album.formattedName = albumName;

  return {
    props: { album }
  };
}

export default AlbumReviewsPage;
