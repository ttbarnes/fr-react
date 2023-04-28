import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import PageContainer from '../../components/PageContainer';
import PageButtonLink from '../../components/PageButtonLink';
import CollaboratorsList from '../../components/CollaboratorsList';
import CONSTANTS from '../../constants';

const CollaboratorsPage = ({ collaborators }) => (
  <PageContainer>
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.COLLABORATORS.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.COLLABORATORS.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.COLLABORATORS.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.COLLABORATORS.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.COLLABORATORS.URL} />
      </Head>

      <div className='main-content'>
        <h1 className='text-align-center'><span className='sr-only'>Fiona Ross</span> Collaborators</h1>

        <CollaboratorsList collaborators={collaborators} />

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/journalism`}
          text='Journalism'
        />

      </div>

    </div>
  </PageContainer>
);

export async function getServerSideProps() {
  const apiResponse = await client.query({
    query: gql`
      {
        collaborators {
          _id
          name
          avatar {
            cloudinaryUrl
          }
          urlName
          orderNumber
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

  const { collaborators } = data;

  return {
    props: {
      collaborators
    }
  };
};


export default CollaboratorsPage;
