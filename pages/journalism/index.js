import { gql } from '@apollo/client';
import client from '../../apollo-client';
import JournalismIntro from '../../components/JournalismIntro';
import JournalismList from '../../components/JournalismList';
import PageButtonLink from '../../components/PageButtonLink';
import CONSTANTS from '../../constants';

const JournalismPage = ({ articles }) => {
  return (
    <div className='container with-page-bg-img'>

      <div className='main-content'>
        <h1 className='heading-uppercase text-align-center'>Journalism by Fiona</h1>

        <JournalismIntro />

        <JournalismList articles={articles} />

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/contact`}
          text='Contact'
        />

      </div>

    </div>
  );
};

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
