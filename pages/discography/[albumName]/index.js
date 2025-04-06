import Head from 'next/head';
import DISCOGRAPHY from '../../../data/discography.json';
import CONSTANTS from '../../../constants';
import PageContainer from '../../../components/PageContainer';
import Album from '../../../components/Album';
import PageButtonLink from '../../../components/PageButtonLink';
import { cleanDiscographyItemName, mapDiscography } from '../../../discography';

const AlbumPage = ({ discography }) => {
  const firstItem = discography[0];

  const metaTitle = `${firstItem.name} - Fiona Ross`;
  const metaDescription = firstItem.albumCredits ? firstItem.albumCredits[0] : CONSTANTS.META_TAGS.OG_DESCRIPTION;
  const metaUrl = `${CONSTANTS.BASE_URL}/discography/${firstItem.formattedName}`;
  const metaImage = `${CONSTANTS.BASE_URL_REACT}/images/discography/social/${firstItem.imageName}.png`;

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

        {firstItem.hasBackgroundImage && (
          <img
            src={`/images/background/${firstItem.imageName}.png`}
            alt=''
            className={`page-img-bg ${firstItem.imageName}`}
            aria-hidden='true'
            role='presentation'
            style={{
              opacity: firstItem.backgroundImageOpacity ? firstItem.backgroundImageOpacity : 1
            }}
          />
        )}

        <div className='main-content container-small'>

          <ul className='no-list-style' aria-label='Albums'>
            {discography.map((item) => (
              <li key={item.name}>
                <Album {...item} />
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

  let mappedDiscography = DISCOGRAPHY;

  if (albumName) {
    const albumNameDecoded = albumName.replace(/-/g, ' ')

    const album = DISCOGRAPHY.find((album) =>
      cleanDiscographyItemName(album.name).toLowerCase() === albumNameDecoded.toLowerCase());

    if (!album) {
      return {
        redirect: {
          permanent: false,
          destination: '/error',
        },
        props: {},
      };
    }

    const allOtherAlbums = DISCOGRAPHY.filter((a) => a.name !== album.name);

    mappedDiscography = mapDiscography([
      album,
      ...allOtherAlbums
    ]);
  }

  return {
    props: {
      discography: mappedDiscography
    }
  };
}


export default AlbumPage;
