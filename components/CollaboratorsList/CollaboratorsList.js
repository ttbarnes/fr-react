import React from 'react';
import styles from './CollaboratorsList.module.scss';

const CollaboratorsList = ({ collaborators }) => (
  <React.Fragment>
    <ul className='grid-layout-4-4 grid-col-hover'>
      {collaborators.map((collab) => (
        <li
          className={`col-50-xs col-25-md col-hover ${styles.collaboratorsListItem}`}
          key={collab.name}>
          <a href='#'>
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
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default CollaboratorsList;
