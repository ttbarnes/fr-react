import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../../apollo-client';
import CONSTANTS from '../../../constants';
import NewsArticle from '../../../components/NewsArticle';

const NewsArticlePage = ({ article }) => {
  const title = `${article.title} - ${CONSTANTS.PAGE.NEWS.TITLE}`;
  const url = `${CONSTANTS.PAGE.NEWS.URL}/${article.title}`;

  return (
    <div className='container with-page-bg-img'>

      <Head>
        <title>{title}</title>

        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />

        <meta name='twitter:title' content={title} />
        <meta property='twitter:url' content={url} />
      </Head>

      <div className='main-content'>

        <NewsArticle {...article} />

      </div>

    </div>
  );
};

export async function getServerSideProps(context) {
  const { urlTitle } = context.query;

  const { data } = await client.query({
    query: gql`
      query($urlTitle: String!) {
        newsArticleByUrlTitle(urlTitle: $urlTitle) {
          _id
          title
          urlTitle
          createdAt
          sections {
            _id
            copy
            images {
              cloudinaryUrl
            }
            videoEmbed
          }
        }
      }
    `,
    variables: {
      urlTitle
    }
  });

  const { newsArticleByUrlTitle } = data;

  return {
    props: {
      article: newsArticleByUrlTitle
    }
  };
};


export default NewsArticlePage;
