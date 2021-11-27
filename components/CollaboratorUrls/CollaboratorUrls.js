import styles from './CollaboratorUrls.module.scss';

const CollaboratorUrls = ({ urls }) => (
  <ul className={styles.list}>
    {(urls.website && urls.website.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={urls.website}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-link ${styles.icon}`}></i>
          Website
        </a>
      </li>
    )}

    {(urls.soundcloud && urls.soundcloud.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={urls.soundcloud}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-s-s  ${styles.icon}`}></i>
          SoundCloud
        </a>
      </li>
    )}

    {(urls.facebook && urls.facebook.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={urls.facebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-s-f ${styles.icon}`}></i>
          Facebook
        </a>
      </li>
    )}

    {(urls.twitter && urls.twitter.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={urls.twitter}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-s-t ${styles.icon}`}></i>
          Twitter
        </a>
      </li>
    )}

    {(urls.instagram && urls.instagram.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={urls.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-s-i ${styles.icon}`}></i>
          Instagram
        </a>
      </li>
    )}

    {(urls.phone && urls.phone.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={`tel:${urls.phone}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-phone ${styles.icon}`}></i>
          {urls.phone}
        </a>
      </li>
    )}

    {(urls.bio && urls.bio.length > 0) && (
      <li className={styles.listItem}>
        <a
          href={urls.bio}
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={`icon-read ${styles.icon}`}></i>
          Bio
        </a>
      </li>
    )}
  </ul>
);

export default CollaboratorUrls;
