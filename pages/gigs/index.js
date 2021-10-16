import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import GigsList from '../../components/GigsList';
import PageButtonLink from '../../components/PageButtonLink';
import CONSTANTS from '../../constants';

const GigsPage = ({ gigs }) => (
  <div className='container with-page-bg-img'>

    <Head>
      <title>{CONSTANTS.PAGE.GIGS.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.GIGS.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.GIGS.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.GIGS.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.GIGS.URL} />
    </Head>

    <div className='main-content'>
      <h1 className='hidden'>Gigs</h1>

      <GigsList gigs={gigs} />

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/news`}
        text='News'
      />

    </div>

  </div>
);

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        gigsByYear {
          year
          gigs {
            title
            location
            venue
            date
            ticketsUrl
          }
        }
      }
    `,
  });

  const { gigsByYear } = data;

  return {
    props: {
      gigs: gigsByYear
    }
  };
}


export default GigsPage;
