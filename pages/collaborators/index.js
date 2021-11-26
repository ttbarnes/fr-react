import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import PageButtonLink from '../../components/PageButtonLink';
import CollaboratorsList from '../../components/CollaboratorsList';
// import styles from './Collaborators.module.scss';
import CONSTANTS from '../../constants';

const CollaboratorsPage = ({ collaborators }) => (
  <div className='container with-page-bg-img'>

    <Head>
      <title>{CONSTANTS.PAGE.COLLABORATORS.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.COLLABORATORS.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.COLLABORATORS.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.COLLABORATORS.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.COLLABORATORS.URL} />
    </Head>

    <div className='main-content'>
      <h1 className='text-align-center'>Collaborators</h1>

      <CollaboratorsList collaborators={collaborators} />

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/journalism`}
        text='Journalism'
      />

    </div>

  </div>
);

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        collaborators {
          name
          avatar {
            cloudinaryUrl
          }
          urlName
        }
      }
    `
  });

  const { collaborators } = data;

  return {
    props: {
      collaborators
    }
  };
};


export default CollaboratorsPage;
