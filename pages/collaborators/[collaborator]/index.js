import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../../apollo-client';
import CONSTANTS from '../../../constants';
import CollaboratorUrls from '../../../components/CollaboratorUrls';
import PageButtonLink from '../../../components/PageButtonLink';
import styles from './Collaborator.module.scss';

const CollaboratorPage = ({ collaborator }) => {
  const title = `${collaborator.name} - ${CONSTANTS.PAGE.COLLABORATORS.TITLE}`;
  const url = `${CONSTANTS.PAGE.COLLABORATORS.URL}/${collaborator.name}`;

  const {
    website,
    facebook,
    instagram,
    twitter,
    soundcloud,
    bandcamp,
    bio,
    email,
    phone
  } = collaborator.urls;

  const urlValues = {
    website,
    facebook,
    instagram,
    twitter,
    soundcloud,
    bandcamp,
    bio,
    email,
    phone
  };

  const cleanUrls = Object.values(urlValues).filter((url) => (url && url !== ""));
  const cleanCollabOn = Object.values(collaborator.collabOn).filter((item) => item !== "");

  const hasAbout = (collaborator.about && collaborator.about !== '<p><br></p>');

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
          <img
            src={collaborator.avatar.cloudinaryUrl}
            alt={collaborator.name}
          />
        </div>

        <div className={styles.colRight}>

          <div className='show-md'>
            <h1 className={styles.headingMd}>{collaborator.name}</h1>
            <p>{collaborator.role}</p>
          </div>

          {cleanCollabOn.length ? (
            <div className={styles.row}>
              <h2 className='h4-size'>Collaborated on</h2>

              <ul className={styles.collabOn}>
                {collaborator.collabOn.map((collab) => {
                  if (collab.length) {
                    return (
                      <li
                        key={collab}
                        className={styles.collabOnListItem}
                      >{collab}</li>
                    );
                  }

                  return null;
                })}
              </ul>
            </div>
          ) : null}

          {hasAbout && (
            <div className={styles.row}>
              <h3 className='h4-size'>About</h3>

              <div
                dangerouslySetInnerHTML={{ __html: collaborator.about }}
                className={`long-copy-line-height link-highlight-hover link-highlight-hover-border ${styles.about}`}
              />
            </div>
          )}

          {cleanUrls.length ? (
            <div className={styles.row}>
              <h3>Links</h3>

              <CollaboratorUrls urls={collaborator.urls} />
            </div>
          ) : null}

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
