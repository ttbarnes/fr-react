import styles from './SocialLinks.module.scss';
const SocialLinks = () => (
  <ul className='nav-links social-links-hover-rotate'>
    <li className={styles.listItem}>
      <a className={styles.listItemLink} href='https://play.spotify.com/artist/59lPcyDIZJxmRqatvAjct8?play=true' target='_blank'>
        <i className={`icon-ssp ${styles.listItemIcon}`}></i>Spotify
      </a>
    </li>
    <li className={styles.listItem}>
      <a className={styles.listItemLink} href='http://twitter.com/fifross' target='_blank'>
        <i className={`icon-s-t ${styles.listItemIcon}`}></i>Twitter
      </a>
    </li>
    <li className={styles.listItem}>
      <a className={styles.listItemLink} href='http://facebook.com/fionarossmusic' target='_blank'>
        <i className={`icon-s-f ${styles.listItemIcon}`}></i>Facebook
      </a>
    </li>
    <li className={styles.listItem}>
      <a className={styles.listItemLink} href='https://www.instagram.com/fifi_ross' target='_blank'>
        <i className={`icon-s-i ${styles.listItemIcon}`}></i>Instagram
      </a>
    </li>
    <li className={styles.listItem}>
      <a className={styles.listItemLink} href='https://www.youtube.com/channel/UC9srPEZZNgnsM23Q777HbzA' target='_blank'>
        <i className={`icon-s-y ${styles.listItemIcon}`}></i>YouTube
      </a>
    </li>
  </ul>
);

export default SocialLinks;
