import styles from './SocialLinks.module.scss';
const SocialLinks = ({
  isSticky
}) => (
  <ul className='nav-links social-links-hover-rotate' aria-label='Social media links'>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href='https://play.spotify.com/artist/59lPcyDIZJxmRqatvAjct8?play=true' target='_blank'>
        <i className={`icon-ssp ${styles.listItemIcon}`}></i>
        {!isSticky && 'Spotify'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href='http://twitter.com/fifross' target='_blank'>
        <i className={`icon-s-t ${styles.listItemIcon}`}></i>
        {!isSticky && 'Twitter'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href='http://facebook.com/fionarossmusic' target='_blank'>
        <i className={`icon-s-f ${styles.listItemIcon}`}></i>
        {!isSticky && 'Facebook'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href='https://www.instagram.com/fifi_ross' target='_blank'>
        <i className={`icon-s-i ${styles.listItemIcon}`}></i>
        {!isSticky && 'Instagram'}
      </a>
    </li>
    <li className={isSticky ? `${styles.listItem} ${styles.isSticky}` : styles.listItem}>
      <a className={styles.listItemLink} href='https://www.youtube.com/channel/UC9srPEZZNgnsM23Q777HbzA' target='_blank'>
        <i className={`icon-s-y ${styles.listItemIcon}`}></i>
        {!isSticky && 'YouTube'}
      </a>
    </li>
  </ul>
);

export default SocialLinks;
