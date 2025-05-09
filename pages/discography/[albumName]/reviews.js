import Head from 'next/head';
import Image from 'next/image';
import DISCOGRAPHY from '../../../data/discography.json';
import CONSTANTS from '../../../constants';
import PageContainer from '../../../components/PageContainer';
import BlockQuote from '../../../components/BlockQuote';
import PageButtonLink from '../../../components/PageButtonLink';
import { cleanDiscographyItemName, getImagePath } from '../../../helpers';

const AlbumReviewsPage = ({ album }) => {
  const metaTitle = `${album.name} - Reviews - Fiona Ross`;
  const metaDescription = album.albumCredits ? album.albumCredits[0] : CONSTANTS.META_TAGS.OG_DESCRIPTION;
  const metaUrl = `${CONSTANTS.BASE_URL}/discography/${album.formattedName}`;
  const metaImage = `${CONSTANTS.BASE_URL_REACT}/images/discography/social/${album.imageName}.png`;

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
      
        <img
          src={`/images/background/${album.imageName}.png`}
          alt=''
          className={`page-img-bg ${album.imageName}`}
          aria-hidden='true'
          role='presentation'
        />

        <div className='main-content container-large'>

          <h1 className='text-align-center'>{album.name} reviews</h1>

          <ul className='no-list-style'>
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
            href='/discography'
            text='Discography'
          />

        </div>
      </div>
    </PageContainer>
  );
};

export async function getServerSideProps(context) {
  const { albumName } = context.query;

  const albumNameDecoded = albumName.replace(/-/g, ' ')

  const album = DISCOGRAPHY.find((album) =>
    cleanDiscographyItemName(album.name).toLowerCase() === albumNameDecoded.toLowerCase()
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
