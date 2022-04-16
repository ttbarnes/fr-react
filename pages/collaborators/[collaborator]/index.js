import { gql } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import client from '../../../apollo-client';
import CONSTANTS from '../../../constants';
import CollaboratorUrls from '../../../components/CollaboratorUrls';
import PageButtonLink from '../../../components/PageButtonLink';
import styles from './Collaborator.module.scss';

const CollaboratorPage = ({ collaborator }) => {
  const title = `${collaborator.name} - ${CONSTANTS.PAGE.COLLABORATORS.TITLE}`;
  const url = `${CONSTANTS.PAGE.COLLABORATORS.URL}/${collaborator.name}`;

  return (
    <div className='container with-page-bg-img'>

      <Head>
        <title>{title}</title>

        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />

        <meta name='twitter:title' content={title} />
        <meta property='twitter:url' content={url} />
      </Head>

      <div className={`main-content ${styles.container}`}>

        <div className='hide-md'>
          <h1 className={`page-heading ${styles.headingSm}`}>{collaborator.name}</h1>
          <p>{collaborator.role}</p>
        </div>


        <div className={styles.colLeft}>
          <Image
            src={collaborator.avatar.cloudinaryUrl}
            alt={collaborator.name}
          />
        </div>

        <div className={styles.colRight}>

          <div className='show-md'>
            <h1 className={styles.headingMd}>{collaborator.name}</h1>
            <p>{collaborator.role}</p>
          </div>

          {(collaborator.collabOn && collaborator.collabOn.length > 0) && (
            <div className={styles.row}>
              <h2 className='h4-size'>Collaborated on</h2>

              <ul className={styles.collabOn}>
                {collaborator.collabOn.map((collab) => (
                  <li
                    key={collab}
                    className={styles.collabOnListItem}
                  >{collab}</li>
                ))}
              </ul>
            </div>
          )}

          {collaborator.about && (
            <div className={styles.row}>
              <h3 className='h4-size'>About</h3>

              <div
                dangerouslySetInnerHTML={{ __html: collaborator.about }}
                className={`long-copy-line-height link-highlight-hover link-highlight-hover-border ${styles.about}`}
              />
            </div>
          )}

          {collaborator.urls && (
            <div className={styles.row}>
              <h3>Links</h3>

              <CollaboratorUrls urls={collaborator.urls} />
            </div>
          )}

          <PageButtonLink
            href={`${CONSTANTS.BASE_URL}/collaborators/${collaborator.nextCollaborator.urlName}`}
            text='Next collaborator'
            subText={collaborator.nextCollaborator.name}
            footerLink={{
              href: `${CONSTANTS.BASE_URL}/collaborators`,
              text: 'All collaborators'
            }}
            alignCenter={false}
          />

        </div>

      </div>

    </div>
  );
};

export async function getServerSideProps(context) {
  const { collaborator: collabName } = context.query;

  const apiResponse = await client.query({
    query: gql`
      query($name: String!) {
        collaboratorByName(name: $name) {
          orderNumber
          _id
          name
          role
          about
          avatar {
            cloudinaryUrl
            cloudinaryPublicId
          },
          collabOn
          urls {
            website
            facebook
            instagram
            twitter
            soundcloud
            bandcamp
            bio
            email
            phone
          }
          nextCollaborator {
            name
            urlName
          }
        }
      }
    `,
    variables: {
      name: collabName
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

  const { collaboratorByName } = data;

  return {
    props: {
      collaborator: collaboratorByName
    }
  };
};


export default CollaboratorPage;
