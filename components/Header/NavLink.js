import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './NavLink.module.css';

const NavLink = ({ link, pathname, text }) => {
  const router = useRouter();

  const { pathname: routerPath } = router;

  let isActive;

  if (pathname === '/' && routerPath === '/') {
    isActive = true;
  } else if (pathname !== '/') {
    isActive = routerPath.includes(pathname);
  }

  const linkClassName = isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <Link href={link} legacyBehavior>
      <a className={linkClassName}>
        <span className={styles.navLinkInner}>{text}</span>
      </a>
    </Link>
  );
};

export default NavLink;
