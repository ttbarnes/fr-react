import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import PressList from '../../components/PressList';
import PageButtonLink from '../../components/PageButtonLink';
import CONSTANTS from '../../constants';

const PressPage = ({ articles }) => (
  <div className='container'>

    <Head>
      <title>{CONSTANTS.PAGE.PRESS.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.PRESS.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.PRESS.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.PRESS.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.PRESS.URL} />
    </Head>

    <div className='main-content'>
      <h1 className='text-align-center'><span className='sr-only'>Finoa Ross </span> Press</h1>

      <PressList articles={articles} />

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/gigs`}
        text='Gigs'
      />

    </div>

  </div>
);

export async function getServerSideProps() {
  const apiResponse = await client.query({
    query: gql`
      {
        press {
          author
          title
          excerpt
          externalLink
        }
      }
    `
  }).catch(() => {
    return {
      networkError: true
    }
  });

  if (apiResponse.networkError) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
      props: {},
    };
  }

  const { data } = apiResponse;

  const { press } = data;

  return {
    props: {
      articles: press,
    }
  };
}


export default PressPage;
