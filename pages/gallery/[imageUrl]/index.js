import Head from 'next/head';
import CONSTANTS from '../../../constants';
import PageContainer from '../../../components/PageContainer';
import GALLERY_IMAGES from '../../../data/gallery.json';
import PageButtonLink from '../../../components/PageButtonLink';
import styles from './GalleryImageSingle.module.scss';

const GalleryImagePage = ({
  image,
  nextImage,
  previousImage
}) => (
  <PageContainer>
    <div className='container with-page-bg-img' id='main'>

      <Head>
        <title>{CONSTANTS.PAGE.GALLERY.TITLE} Image</title>

        <meta property='og:title' content={CONSTANTS.PAGE.GALLERY.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.GALLERY.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.GALLERY.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.GALLERY.URL} />
      </Head>

      <div className='main-content text-align-center'>
        <h1 className='text-align-center'><span className='sr-only'>Fiona Ross </span>Gallery image</h1>

        {image.caption && (
          <p className={styles.caption}>Photo by {image.caption}</p>
        )}

        <img
          src={`/images/gallery/${image.url}`}
          alt={`Photo by ${image.caption}`}
          className={styles.image}
        />

        <p className={styles.nextPreviousLinks}>
          <a
            href={`${CONSTANTS.BASE_URL}/gallery/${nextImage.url}`}
            className='link-highlight-hover-border'
          >Next image</a>

          {previousImage && (
            <>
              <a
                href={`${CONSTANTS.BASE_URL}/gallery/${previousImage.url}`}
                className={`link-highlight-hover-border ${styles.previousLink}`}
              >Previous image</a>
            </>
          )}

        </p>

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/gallery`}
          text='View all'
        />

      </div>

    </div>
  </PageContainer>
);

export async function getServerSideProps(context) {
  const { imageUrl } = context.query;

  const totalImages = (GALLERY_IMAGES.length - 1); // minus one to avoid less logic with findIndex.

  const currentImage = GALLERY_IMAGES.find(({ url }) => url === imageUrl);

  const currentImageIndex = GALLERY_IMAGES.findIndex((image) =>
    image.url === currentImage.url);

  let nextImage;

  if (currentImageIndex === totalImages) {
    nextImage = GALLERY_IMAGES[0];
  } else {
    nextImage = GALLERY_IMAGES[currentImageIndex + 1];
  }

  let previousImage;

  if (currentImageIndex > 1) {
    previousImage = GALLERY_IMAGES[currentImageIndex - 1];
  }

  return {
    props: {
      image: currentImage,
      nextImage,
      previousImage
    }
  };
}


export default GalleryImagePage;
