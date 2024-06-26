import React from 'react';
import Link from 'next/link';
import styles from './CollaboratorsList.module.scss';
import CONSTANTS from '../../constants';

const CollaboratorsList = ({ collaborators }) => {
  const collabs = JSON.parse(JSON.stringify(collaborators));

  const orderedCollaborators = collabs.sort((a, b) => {
    if (Number(a.orderNumber) > Number(b.orderNumber)) {
      return 1;
    }

    return -1;
  });

  return (
    <ul className='grid-layout-4-4'>
      {orderedCollaborators.map((collab) => (
        <li
          className={`col-50-xs col-25-md no-list-style ${styles.collaboratorsListItem}`}
          key={collab.name}>
          <Link href={`${CONSTANTS.BASE_URL}/collaborators/${collab.urlName}`} legacyBehavior>
            <a>
              <div className={styles.inner}>
                <img
                  src={collab.avatar.cloudinaryUrl}
                  alt={collab.name}
                  className={styles.image}
                />
                <div className={styles.boxHeading}>
                  <h4 className={styles.heading}>{collab.name}</h4>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CollaboratorsList;
