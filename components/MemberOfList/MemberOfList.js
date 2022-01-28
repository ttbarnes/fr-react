import styles from './MemberOfList.module.scss';

const MemberOfList = () => (
  <ul
    aria-label={`Fiona's memberships`}
    className='no-list-style'
  >
    <li className={styles.listItem}>
      <a
        href="https://www.prsformusic.com"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='PRS for Music'
        className={styles.listItemLink}
      >
        <img src='./images/about/prs.png' alt='' />
      </a>
    </li>

    <li className={styles.listItem}>
      <a
        href="https://www.mpg.org.uk"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='The Music Producers Guild'
        className={styles.listItemLink}
      >
        <img src='./images/about/mpg.png' alt='' />
      </a>
    </li>

    <li className={styles.listItem}>
      <a
        href="https://basca.org.uk"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='The Ivors Academy'
        className={styles.listItemLink}
      >
        <img src='./images/about/basca.png' alt='' />
      </a>
    </li>

    <li className={styles.listItem}>
      <a
        href="http://www.ppluk.com"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='PPL'
        className={styles.listItemLink}
      >
        <img src='./images/about/ppl.png' alt='' />
      </a>
    </li>

    <li className={styles.listItem}>
      <a
        href="https://www.insomniacclub.co.uk"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Insomniac Club'
        className={styles.listItemLink}
      >
        <img src='./images/about/insomniac.png' alt='' />
      </a>
    </li>
  </ul>
);

export default MemberOfList;

