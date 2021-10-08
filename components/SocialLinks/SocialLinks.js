import CONSTANTS from '../../constants';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({
  isSticky
}) => (
  <ul className='no-list-style nav-links social-links-hover-rotate' aria-label='Social media links' role='list'>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={styles.listItemLink}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.SPOTIFY}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Spotify'
      >
        <i className={`icon-ssp ${styles.listItemIcon}`}></i>
        <span className={styles.text}>Spotify</span>
      </a>
    </li>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={styles.listItemLink}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.TWITTER}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'
      >
        <i className={`icon-s-t ${styles.listItemIcon}`}></i>
        <span className={styles.text}>Twitter</span>
      </a>
    </li>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={styles.listItemLink}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.FACEBOOK}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Facebook'
      >
        <i className={`icon-s-f ${styles.listItemIcon}`}></i>
        <span className={styles.text}>Facebook</span>
      </a>
    </li>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={styles.listItemLink}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.INSTAGRAM}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
      >
        <i className={`icon-s-i ${styles.listItemIcon}`}></i>
        <span className={styles.text}>Instagram</span>
      </a>
    </li>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={styles.listItemLink}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.YOUTUBE}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='YouTube'
      >
        <i className={`icon-s-y ${styles.listItemIcon}`}></i>
        <span className={styles.text}>YouTube</span>
      </a>
    </li>

  </ul>
);

export default SocialLinks;
