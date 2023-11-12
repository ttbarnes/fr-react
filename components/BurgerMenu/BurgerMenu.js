import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import links from '../../data/nav-links';
import NavLink from './NavLink';

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <div aria-hidden='true'>
      <Menu
        width={250}
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <ul className='no-list-style bm-ul'>
          {links.map((link) => (
            <li
              key={link.route}
            >
              <NavLink
                link={link.route}
                pathname={link.pathname}
                text={link.text}
                onClick={closeSideBar}
              />
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
