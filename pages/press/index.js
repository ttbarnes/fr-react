import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import CategoriesList from '../../components/CategoriesList';
import PageButtonLink from '../../components/PageButtonLink';

const PressPage = ({ articles }) => (
  <PageContainer>
    <div className='container'>

      <Head>
        <title>{CONSTANTS.PAGE.PRESS.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.PRESS.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.PRESS.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.PRESS.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.PRESS.URL} />
      </Head>

    <div className='main-content'>
      <h1 className='text-align-center'><span className='sr-only'>Fiona Ross </span> Press</h1>

      <CategoriesList categories={Object.values(CONSTANTS.PRESS_CATEGORIES)}/>

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/gigs`}
          text='Gigs'
        />

      </div>

    </div>
  </PageContainer>
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
          categoryId
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
