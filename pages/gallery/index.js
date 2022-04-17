import Head from 'next/head';
import PageButtonLink from '../../components/PageButtonLink';
import Gallery from '../../components/Gallery';
import CONSTANTS from '../../constants';
import GALLERY_IMAGES from '../../data/gallery.json';

const GalleryPage = ({ images }) => (
  <div className='container with-page-bg-img' id='main'>

    <Head>
      <title>{CONSTANTS.PAGE.GALLERY.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.GALLERY.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.GALLERY.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.GALLERY.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.GALLERY.URL} />
    </Head>

    <div className='main-content'>
      <h1 className='text-align-center'>Gallery</h1>

      <Gallery images={images} />

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/collaborators`}
        text='Collaborators'
      />

    </div>

  </div>
);

export async function getServerSideProps() {
  return {
    props: {
      images: GALLERY_IMAGES
    }
  };
}


export default GalleryPage;
