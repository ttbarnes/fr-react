import { gql } from '@apollo/client';
import client from '../../apollo-client';
import JournalismList from '../../components/JournalismList';


const JournalismPage = ({ articles }) => {
  return (
    <div className='container with-page-bg-img'>

      <p>Journalism</p>

      <JournalismList articles={articles} />

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
