import Link from 'next/link';
import { useRouter } from 'next/router'

const NavLink = ({ link, text }) => {
  const router = useRouter();

  const { pathname } = router;

  let isActive;

  if (link === '/' && pathname === '/') {
    isActive = true;
  } else if (link !== '/') {
    isActive = pathname.includes(link);
  }

  const linkClassName = isActive ? 'bm-link bm-link-active' : 'bm-link';

  return (
    <Link href={link}>
      <a className={linkClassName}>{text}</a>
    </Link>
  );
};

export default NavLink;
