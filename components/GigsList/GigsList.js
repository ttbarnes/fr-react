import React from 'react';
import { format } from 'date-fns';
import YearHeading from './YearHeading';
import GigHeading from './GigHeading';
import styles from './GigsList.module.scss';

const GigsList = ({ gigs }) => (
  <React.Fragment>
    {gigs.map((year, index) => (
      <ul
        key={year.year}
        className={`no-list-style row ${styles.yearList}`}
      >
        <li>
          <YearHeading
            index={index}
            year={year.year}
          />

          <ul className='no-list-style'>
            {year.gigs.map((gig) => {
              let gigTitle;

              if (gig.title) {
                gigTitle = `${gig.title} - ${gig.venue}`;
              } else {
                gigTitle = gig.venue;
              }

              return (
                <li
                  key={gigTitle}
                  className={styles.listItem}
                >
                  <div className={styles.listItemInner}>

                    <GigHeading
                      yearIndex={index}
                      title={gigTitle}
                    />

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
                        className={`button button-black ${styles.button}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Get tickets for ${gig.title}`}
                      >Tickets
                      </a>
                    </div>

                  </div>
                </li>
              )}
            )}
          </ul>
        </li>
      </ul>
      
    ))}
  </React.Fragment>
);

export default GigsList;
