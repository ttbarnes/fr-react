import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import links from '../../data/nav-links';

const BurgerMenu = () => (
  <div aria-hidden='true'>
    <Menu width={250}>
      <ul>
        {links.map((link) => (
          <li
            key={link.route}
          >
            <Link href={link.route}>
              <a className='bm-link'>{link.text}</a>
            </Link>

          </li>
        ))}
      </ul>
    </Menu>
  </div>
);

export default BurgerMenu;
