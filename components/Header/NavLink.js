import Link from 'next/link';
import styles from './NavLink.module.css';

const NavLink = ({ link, text}) => (
  <Link href={link}>
    <a className={styles.navLink}>
     <span className={styles.navLinkInner}>{text}</span>
   </a>
  </Link>
);

export default NavLink;
