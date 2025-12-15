import { gql } from '@apollo/client';
import Head from 'next/head';
import { isBefore } from 'date-fns';
import client from '../../apollo-client';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import GigsList from '../../components/GigsList';
import PageButtonLink from '../../components/PageButtonLink';
import styles from './Gigs.module.scss';

const sortGigs = (years) => {
  const now = new Date();

  const currentYear = now.getFullYear();

  const gigYears = JSON.parse(JSON.stringify(years));

  const currentYearGigs = [];
  const futureGigYears = [];
  const previousGigYears = [];

  gigYears.forEach((yearObj) => {
    const { year } = yearObj;

    let sortedYearGigs;

    if (Number(year) > currentYear) {
      futureGigYears.push(yearObj);
    }
    
    if (Number(year) === currentYear) {
      const sortedUpcomingGigs = yearObj.gigs.sort((a, b) => Math.abs(Date.now() - new Date(a.date)) - Math.abs(Date.now() - new Date(b.date)));

      currentYearGigs.push({
        year,
        gigs: sortedUpcomingGigs,
      });
    }

    if (Number(year) < currentYear) {
      previousGigYears.push(yearObj);
    }
  });

  const sortedPreviousGigYears = previousGigYears.sort((a, b) => new Date(a.year) - new Date(b.year)).reverse();

  const gigsOrderedByYear = [
    ...currentYearGigs,
    ...futureGigYears,
    ...sortedPreviousGigYears
  ];

  return gigsOrderedByYear;
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
