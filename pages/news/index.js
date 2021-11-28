import { gql } from '@apollo/client';
import Head from 'next/head';
import { fromUnixTime, format } from 'date-fns';
import client from '../../apollo-client';
import PageButtonLink from '../../components/PageButtonLink';
import CONSTANTS from '../../constants';
import styles from './News.module.scss';

const NewsPage = ({ articles }) => {

  const sectionImagesListClassName = (sectionImages) => {
    let className = 'no-list-style';
    if (sectionImages.length === 1) {
      className = `${className} ${styles.articleSectionImagesList}`;
    }

    if (sectionImages.length > 1) {
      className = `${className} ${styles.articleSectionImagesListMultipleImages}`;
    }

    return className;
  };

  // const styles.articleSectionImageColumn

  const sectionImagesListItemClassName = (sectionImages) => {
    let className = '';

    if (sectionImages.length === 1) {
      className = styles.articleSectionImageColumn;
    }

    if (sectionImages.length > 1) {
      className = styles.articleSectionImageColumnHasMultiple;
    }

    return className;
  };

  return (
    <div className='container with-page-bg-img'>

      <Head>
        <title>{CONSTANTS.PAGE.NEWS.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.NEWS.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.NEWS.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.NEWS.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.NEWS.URL} />
      </Head>

      <div className='main-content'>
        <h1 className='text-align-center'>News</h1>

        <ul className='no-list-style link-highlight-hover-border'>
          {articles.map((article) => (
            <li
              key={article.title}
              className={styles.articleListItem}
            >
              <h2>{article.title}</h2>

              {/*
                <p className={styles.date}>
                {format(new Date(fromUnixTime(article.createdAt)), 'MMM do')}
              </p>
              */}

              {article.sections && article.sections.map((section) => (
                <ul className={`no-list-style ${styles.articleSection}`}>
                  <li key={section._id}>
                    {section.copy && (
                      <div
                        dangerouslySetInnerHTML={{ __html: section.copy }}
                      />
                    )}

                    {section.videoEmbed && (
                      <div
                        dangerouslySetInnerHTML={{ __html: section.videoEmbed }}
                      />
                    )}

                    {section.images && (
                      <ul className={sectionImagesListClassName(section.images)}>
                        {section.images.map((image) => (
                          <li
                            key={image.cloudinaryUrl}
                            className={sectionImagesListItemClassName(section.images)}
                          >
                            <div className={styles.imgWrap}>
                              <img
                                className={`styles.image ${styles.articleSectionImage}`}
                                src={image.cloudinaryUrl} alt=''
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              ))}
            </li>
          ))}
        </ul>

        <PageButtonLink
          href={`${CONSTANTS.BASE_URL}/videos`}
          text='Videos'
        />

      </div>

    </div>
  );
};

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
          }
        }
      }
    `
  });

  const { news } = data;

  return {
    props: {
      articles: news
    }
  };
};


export default NewsPage;
