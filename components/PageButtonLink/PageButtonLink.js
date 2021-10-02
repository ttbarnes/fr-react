import Link from 'next/link';
import styles from './PageButtonLink.module.scss';

const PageButtonLink = ({ href, text, icon}) => (
  <div className={`row ${styles.container}`}>
    <Link href={href}>
      <a className={`button ${styles.link}`}>
        <span className={styles.linkText}>{text}</span>
        <i className={`${icon} ${styles.linkIcon}`} />
      </a>
    </Link>
  </div>
);

export default PageButtonLink;
