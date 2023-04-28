import Head from 'next/head';
import VIDEOS from '../../data/videos';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import PageButtonLink from '../../components/PageButtonLink';
import VideosList from '../../components/VideosList';

const VideosPage = ({ videos }) => (
  <PageContainer>
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.VIDEOS.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.VIDEOS.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.VIDEOS.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.VIDEOS.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.VIDEOS.URL} />
      </Head>

      <div className='main-content'>
        <h1 className='text-align-center'><span className='sr-only'>Fiona Ross </span>Videos</h1>

        <VideosList videos={videos} />

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/about`}
          text='About Fiona'
        />

      </div>

    </div>
  </PageContainer>
);

export async function getServerSideProps() {
  let videos = VIDEOS;

  return {
    props: {
      videos
    }
  };
}

export default VideosPage;
