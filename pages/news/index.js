import { gql } from '@apollo/client';
import Head from 'next/head';
import { fromUnixTime, format } from 'date-fns';
import client from '../../apollo-client';
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import PageButtonLink from '../../components/PageButtonLink';
import styles from './News.module.scss';
import NewsArticle from '../../components/NewsArticle';

const sortArticles = (articles) => {
  const sortedNews = JSON.parse(JSON.stringify(articles));

  sortedNews.sort((a, b) => new Date(Number(a.createdAt)) - new Date(Number(b.createdAt)));

  return sortedNews.reverse();
};

const NewsPage = ({ articles }) => (
  <PageContainer>
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.NEWS.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.NEWS.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.NEWS.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.NEWS.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.NEWS.URL} />
      </Head>

      <div className={`main-content ${styles.mainContainer}`}>
        <h1 className='text-align-center'><span className='sr-only'>Fiona Ross </span>News</h1>

        <ul className='no-list-style link-highlight-hover-border'>
          {articles.map((article) => (
            <li
              key={article.title}
              className={styles.articleListItem}
            >
              <NewsArticle {...article} />
            </li>
          ))}
        </ul>

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/videos`}
          text='Videos'
        />

      </div>

    </div>
  </PageContainer>
);

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        news {
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
    `
  });

  const { news } = data;

  const sortedArticles = sortArticles(news);

  return {
    props: {
      articles: sortedArticles
    }
  };
};


export default NewsPage;
