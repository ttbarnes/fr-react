import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './NavLink.module.css';

const NavLink = ({ link, text}) => {
  const router = useRouter();

  const { pathname } = router;

  let isActive;

  if (link === '/' && pathname === '/') {
    isActive = true;
  } else if (link !== '/') {
    isActive = pathname.includes(link);
  }

  const linkClassName = isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <Link href={link}>
      <a className={linkClassName}>
      <span className={styles.navLinkInner}>{text}</span>
    </a>
    </Link>
  );
};

export default NavLink;
