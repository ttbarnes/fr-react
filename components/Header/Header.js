import Link from 'next/link';
import NavLink from './NavLink';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NavLink link='/' text='Home' />
          </li>
            <li className={styles.navListItem}>
            <NavLink link='/music' text='Music' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/press' text='Press' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/gigs' text='Gigs' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/news' text='News' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/videos' text='Videos' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/about' text='About' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/gallery' text='Gallery' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/collaborators' text='Collaborators' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/journalism' text='Journalism' />
          </li>
          <li className={styles.navListItem}>
            <NavLink link='/contact' text='Contact' />
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
