import { gql } from '@apollo/client';
import Head from 'next/head';
import { isBefore } from 'date-fns';
import client from '../../apollo-client';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import GigsList from '../../components/GigsList';
import PageButtonLink from '../../components/PageButtonLink';
import styles from './Gigs.module.scss';

const sortGigs = (gigs) => {
  const now = new Date();

  const currentYear = now.getFullYear();

  let sortedGigs = JSON.parse(JSON.stringify(gigs));

  const sortedYears = sortedGigs.sort((a, b) => Number(a.year) - Number(b.year)).reverse();

  sortedGigs = sortedGigs.map((year) => {
    let sortedYearGigs;

    if (Number(year.year) === currentYear) {
      const previousGigs = year.gigs.filter((gig) => isBefore(new Date(gig.date), new Date()));

      const upcomingGigs = year.gigs.filter((gig) => !isBefore(new Date(gig.date), new Date()));

      const sortedUpcomingGigs = upcomingGigs.sort((a, b) => Math.abs(Date.now() - new Date(a.date)) - Math.abs(Date.now() - new Date(b.date)));

      sortedYearGigs = [
        ...sortedUpcomingGigs,
        ...previousGigs
      ];

    } else {
      sortedYearGigs = year.gigs.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
    }

    return {
      year: year.year,
      gigs: sortedYearGigs
    };
  });

  return sortedGigs;
};

const GigsPage = ({ gigs }) => (
  <PageContainer>
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.GIGS.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.GIGS.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.GIGS.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.GIGS.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.GIGS.URL} />
      </Head>

      <img
        src={'/images/background/gigs-page.png'}
        alt=''
        className='page-img-bg'
        aria-hidden='true'
        role='presentation'
      />

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
  </PageContainer>
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
