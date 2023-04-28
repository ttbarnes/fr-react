import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../../../apollo-client';
import ExternalLinksList from '../../../../components/ExternalLinksList';
import PressCategoriesList from '../../../../components/CategoriesList';
import PageButtonLink from '../../../../components/PageButtonLink';
import CONSTANTS from '../../../../constants';
import getStringWithoutDashes from '../../../../helpers/get-string-without-dashes';
import getCategoryByTitle from '../../../../helpers/get-category-by-title';

const PressPage = ({ categoryTitle, articles }) => {
  const title = `${categoryTitle} | ${CONSTANTS.PAGE.PRESS.TITLE}`;

  return (
    <div className='container'>

      <Head>
        <title>{title}</title>

        <meta property='og:title' content={title} />
        <meta property='og:url' content={CONSTANTS.PAGE.PRESS.URL} />

        <meta name='twitter:title' content={title} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.PRESS.URL} />
      </Head>

      <div className='main-content'>
        <h1 className='text-align-center'><span className='sr-only'>Fiona Ross </span> Press - {categoryTitle}</h1>

        <ExternalLinksList
          items={articles}
          heading='Press articles'
        />

        <PageButtonLink
          href={CONSTANTS.PAGE.PRESS.URL}
          text='View all press'
        />

      </div>

    </div>
  );
}

export async function getServerSideProps(context) {
  const { categoryTitle } = context.query;

  const titleWithoutDashes = getStringWithoutDashes(categoryTitle);

  const categories = Object.values(CONSTANTS.PRESS_CATEGORIES);

  const category = getCategoryByTitle(categories, titleWithoutDashes);

  if (!category) {
    return {
      redirect: {
        permanent: false,
        destination: CONSTANTS.PAGE.PRESS.URL
      },
      props: {}
    };
  }

  const apiResponse = await client.query({
    query: gql`
      query pressCategory($categoryId: ID!) {
        pressCategory(categoryId: $categoryId) {
          author
          title
          excerpt
          externalLink
          categoryId
          image {
            cloudinaryUrl
          }
        }
      }
    `,
    variables: {
      categoryId: Number(category.ID)
    }
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

  const { pressCategory } = data;

  return {
    props: {
      categoryTitle: titleWithoutDashes,
      articles: pressCategory
    }
  };
}


export default PressPage;
