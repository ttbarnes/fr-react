import styles from './OrganisationsSupportList.module.scss';

const OrganisationsSupportList = () => (
  <ul
    aria-label='Organisations support'
    className='no-list-style'
  >
    <li className={styles.listItem}>
      <a
        href='http://helpmusicians.org.uk'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Help Musicians'>helpmusicians.org.uk
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href='http://girlsthatgig.com'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Girls that Gig'>girlsthatgig.com
      </a>
    </li>
      <li className={styles.listItem}>
      <a
        href='http://recordingacademy.com'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='The Recording Academy'>recordingacademy.com
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href='http://soundgirls.org'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Sound Girls'>soundgirls.org
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href='http://masato.co.uk/collections/masato-homeless-support'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Masato'>masato.co.uk/collections/masato-homeless-support
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href='http://musicmindsmatter.org.uk'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Music Minds Matter'>musicmindsmatter.org.uk
      </a>
    </li>
    <li className={styles.listItem}>
      <a
        href='http://indiemusicwomen.com'
        className='link-highlight-hover-border'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Indie Music Women'>indiemusicwomen.com
      </a>
    </li>
  </ul>
);

export default OrganisationsSupportList;
