import Link from 'next/link';
import styles from './CtaLink.module.scss';

const CtaLink = ({ href, text }) => (
  <Link
    href={href}
    className={styles.link}
    passHref
  >
    {text}
  </Link>
);

export default CtaLink;
