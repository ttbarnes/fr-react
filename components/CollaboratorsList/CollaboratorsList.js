import React from 'react';
import Link from 'next/link';
import styles from './CollaboratorsList.module.scss';
import CONSTANTS from '../../constants';

const CollaboratorsList = ({ collaborators }) => (
  <React.Fragment>
    <ul className='grid-layout-4-4'>
      {collaborators.map((collab) => (
        <li
          className={`col-50-xs col-25-md no-list-style ${styles.collaboratorsListItem}`}
          key={collab.name}>
          <Link href={`${CONSTANTS.BASE_URL}/collaborators/${collab.urlName}`}>
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
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default CollaboratorsList;
