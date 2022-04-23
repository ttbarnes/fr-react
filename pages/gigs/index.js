import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import GigsList from '../../components/GigsList';
import PageButtonLink from '../../components/PageButtonLink';
import styles from './Gigs.module.scss';
import CONSTANTS from '../../constants';

const sortGigs = (gigs) => {
  const sortedGigs = JSON.parse(JSON.stringify(gigs));

  sortedGigs.map((year) => {
    const sortedYearGigs = year.gigs.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();

    return {
      year,
      gigs: sortedYearGigs
    };
  });

  return sortedGigs.reverse();
};

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
      <h1 className='sr-only'>Fiona Ross gigs</h1>
      <h2 className={`text-align-center ${styles.heading}`}>{gigs[0].year} gigs </h2>

      <GigsList gigs={gigs} />

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/news`}
        text='News'
      />

    </div>

  </div>
);

export async function getServerSideProps() {
  const apiResponse = await client.query({
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

  const { gigsByYear } = data;

  const sortedGigs = sortGigs(gigsByYear);

  return {
    props: {
      gigs: sortedGigs
    }
  };
}


export default GigsPage;
