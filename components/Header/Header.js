import Link from 'next/link';
import NavLink from './NavLink';
import links from '../../data/nav-links';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header} role='banner'>

      <nav className={styles.nav}>
        <ul className={`no-list-style ${styles.navList}`}>
          {links.map((link) => (
            <li
              className={styles.navListItem}
              key={link.route}
            >
              <NavLink
                link={link.route}
                pathname={link.pathname}
                text={link.text}
              />
            </li>
          ))}
        </ul>
      </nav>
      
    </header>
  )
};

export default Header;
