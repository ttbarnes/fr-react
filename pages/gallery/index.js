import Head from 'next/head';
import Link from 'next/link';
import PageContainer from '../../components/PageContainer';
import PageButtonLink from '../../components/PageButtonLink';
import Gallery from '../../components/Gallery';
import CONSTANTS from '../../constants';
import GALLERY_IMAGES from '../../data/gallery.json';

const GalleryPage = ({ images }) => (
  <PageContainer>
    <div className='container with-page-bg-img' id='main'>

      <Head>
        <title>{CONSTANTS.PAGE.GALLERY.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.GALLERY.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.GALLERY.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.GALLERY.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.GALLERY.URL} />
      </Head>

      <img
        src={'/images/background/sofa2.png'}
        alt=''
        className='page-img-bg'
        aria-hidden='true'
        role='presentation'
        style={{ top: '48px'}}
      />

      <div className='main-content'>
        <h1 className='text-align-center'><span className='sr-only'>Fiona Ross </span>Gallery <span className='sr-only'>of gigs, events, photoshoots</span></h1>

        <p className='text-align-center'>
          <Link
            href={`${CONSTANTS.BASE_URL}/gallery/signed-photo`}
            legacyBehavior
          >
            <a className='link-highlight-hover-border'>Get a signed photo from Fi</a>
          </Link>
        </p>

        <Gallery images={images} />

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/collaborators`}
          text='Collaborators'
        />

      </div>

    </div>
  </PageContainer>
);

export async function getServerSideProps() {
  return {
    props: {
      images: GALLERY_IMAGES
    }
  };
}


export default GalleryPage;
