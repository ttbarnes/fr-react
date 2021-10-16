import React from 'react';
import { format } from 'date-fns';
import styles from './GigsList.module.scss';

const GigsList = ({ gigs }) => (
  <React.Fragment>
    {gigs.map((year, index) => (
      <ul
        key={year.year}
        className={`no-list-style row ${styles.yearList}`}
      >
        <li>
          {index !== 0 && (
            <h2 className={`text-align-center ${styles.yearHeading}`}>{year.year} gigs</h2>
          )}

          <ul className='no-list-style'>
            {year.gigs.map((gig) => (
              <li
                key={gig.title}
                className={styles.listItem}
              >
                <div className={styles.listItemInner}>
                  <h3 className={`h4-size ${styles.listItemHeading}`}>{gig.title} - {gig.venue}</h3>

                  <p className={styles.listItemParagraph}>{gig.location}</p>

                  <p className={`${styles.listItemParagraph} ${styles.listItemDate}`}>
                    {format(new Date(gig.date), 'MMM do')}
                    {gig.time && (
                      <span>&nbsp;-&nbsp;{gig.time}</span>
                    )}
                  </p>

                  <div className='row'>
                    <a
                      href={gig.ticketsUrl}
                      className='button button-black'
                      target='_blank'
                      rel='noopener noreferrer'>Tickets
                    </a>
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      
    ))}
  </React.Fragment>
);

export default GigsList;
