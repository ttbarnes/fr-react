import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';
import JournalismIntro from '../../components/JournalismIntro';
import JournalismList from '../../components/JournalismList';
import PageButtonLink from '../../components/PageButtonLink';
import CONSTANTS from '../../constants';

const JournalismPage = ({ articles }) => (
  <div className='container with-page-bg-img'>

    <Head>
      <title>{CONSTANTS.PAGE.JOURNALISM.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.JOURNALISM.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.JOURNALISM.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.JOURNALISM.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.JOURNALISM.URL} />
    </Head>

    <div className='main-content'>
      <h1 className='text-align-center'>Journalism by Fiona</h1>

      <JournalismIntro />

      <JournalismList articles={articles} />

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/contact`}
        text='Contact'
      />

    </div>

  </div>
);

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        journalism {
          title
          copy
          externalLink
          image {
            cloudinaryUrl
          }
        }
      }
    `,
  });

  const { journalism } = data;

  return {
    props: {
      articles: journalism
    }
  };
}


export default JournalismPage;
