import CONSTANTS from '../../constants';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({
  isSticky
}) => (
  <ul className='no-list-style nav-links social-links-hover-rotate' aria-label='Social media links' role='list'>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={styles.listItemLink}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.BANDCAMP}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Bandcamp'
      >
        <img src='/images/icons/b-c.png' alt='' className={styles.listItemImageIcon} />
        <span className={styles.text}>Bandcamp</span>
      </a>
    </li>

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

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a
        className={`${styles.listItemLink} ${styles.iconTtLink}`}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.TIKTOK}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='TikTok'
      >
        <img
          src={'/images/icons/s-tt.svg'}
          alt='TikTok'
          className='icon-tt'
          aria-label='TikTok'
        />
      </a>
    </li>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky} ${styles.iconThr}` : `${styles.listItem} ${styles.iconThr}`}>
      <a
        className={`${styles.listItemLink} ${styles.iconThr}`}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.THREADS}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Threads'
      >
        <img
          src={'/images/icons/s-thr.svg'}
          alt='Threads'
          className='icon-thr'
          aria-label='Threads'
        />
      </a>
    </li>

    <li className={isSticky ? `${styles.listItem} ${styles.isSticky} ${styles.iconBs}` : `${styles.listItem} ${styles.iconBs}`}>
      <a
        className={`${styles.listItemLink}`}
        href={CONSTANTS.SOCIAL_MEDIA_URLS.BLUESKY}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Bluesky'
      >
        <img
          src={'/images/icons/s-bs.svg'}
          alt='Bluesky'
          className='icon-bs'
          aria-label='Bluesky'
        />
      </a>
    </li>

  </ul>
);

export default SocialLinks;
