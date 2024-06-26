import Link from 'next/link';
import styles from './CtaLink.module.scss';

const CtaLink = ({ href, text }) => (
  <Link href={href} legacyBehavior>
    <a className={styles.link}>{text}</a>
  </Link>
);

export default CtaLink;
