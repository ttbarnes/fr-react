import Link from 'next/link';
import { useRouter } from 'next/router'

const NavLink = ({ link, pathname, text, onClick }) => {
  const router = useRouter();

  const { pathname: routerPath } = router;

  let isActive;

  if (pathname === '/' && routerPath === '/') {
    isActive = true;
  } else if (pathname !== '/') {
    isActive = routerPath.includes(pathname);
  }

  const linkClassName = isActive ? 'bm-link bm-link-active' : 'bm-link';

  return (
    <Link href={link}>
      <a
        onClick={onClick}
        className={linkClassName}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
