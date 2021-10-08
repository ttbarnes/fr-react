import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import links from '../../data/nav-links';
import NavLink from './NavLink';

const BurgerMenu = () => (
  <div aria-hidden='true'>
    <Menu width={250}>
      <ul className='no-list-style bm-ul'>
        {links.map((link) => (
          <li
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
    </Menu>
  </div>
);

export default BurgerMenu;
