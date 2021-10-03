import CONSTANTS from '../../constants';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({
  isSticky
}) => (
  <ul className='nav-links social-links-hover-rotate' aria-label='Social media links'>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href={CONSTANTS.SOCIAL_MEDIA_URLS.SPOTIFY} target='_blank' rel='noopener noreferrer'>
        <i className={`icon-ssp ${styles.listItemIcon}`}></i>
        {!isSticky && 'Spotify'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href={CONSTANTS.SOCIAL_MEDIA_URLS.TWITTER} target='_blank' rel='noopener noreferrer'>
        <i className={`icon-s-t ${styles.listItemIcon}`}></i>
        {!isSticky && 'Twitter'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href={CONSTANTS.SOCIAL_MEDIA_URLS.FACEBOOK} target='_blank' rel='noopener noreferrer'>
        <i className={`icon-s-f ${styles.listItemIcon}`}></i>
        {!isSticky && 'Facebook'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href={CONSTANTS.SOCIAL_MEDIA_URLS.INSTAGRAM} target='_blank' rel='noopener noreferrer'>
        <i className={`icon-s-i ${styles.listItemIcon}`}></i>
        {!isSticky && 'Instagram'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href={CONSTANTS.SOCIAL_MEDIA_URLS.YOUTUBE} target='_blank' rel='noopener noreferrer'>
        <i className={`icon-s-y ${styles.listItemIcon}`}></i>
        {!isSticky && 'YouTube'}
      </a>
    </li>
  </ul>
);

export default SocialLinks;
