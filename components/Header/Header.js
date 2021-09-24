import Link from 'next/link';

const NavLink = ({ href, text }) => (
  <a href={href} className='nav-link'><span>{text}</span></a>
);

const Header = () => {
  return (
    <header className='header'>

      {/*
        <h1><Link href='/'>Fiona Ross</Link></h1>
      */}

      <nav className='container nav'>
        <ul className='nav-items nav-items-large'>
          <li>
            <Link href='/home' passHref>
              <NavLink text='Home' />
            </Link>
          </li>
          <li>
            <Link href='/music' passHref>
              <NavLink text='Music' />
            </Link>
          </li>
          <li>
            <Link href='/press' passHref>
              <NavLink text='Press' />
            </Link>
          </li>
          <li>
            <Link href='/gigs' passHref>
              <NavLink text='Gigs' />
            </Link>
          </li>
          <li>
            <Link href='/news' passHref>
              <NavLink text='News' />
            </Link>
          </li>
          <li>
            <Link href='/videos' passHref>
              <NavLink text='Videos' />
            </Link>
          </li>
          <li>
            <Link href='/about' passHref>
              <NavLink text='About' />
            </Link>
          </li>
          <li>
            <Link href='/gallery' passHref>
              <NavLink text='Gallery' />
            </Link>
          </li>
          <li>
            <Link href='/collaborators' passHref>
              <NavLink text='Collaborators' />
            </Link>
          </li>
          <li>
            <Link href='/journalism' passHref>
              <NavLink text='Journalism' />
            </Link>
          </li>
          <li>
            <Link href='/contact' passHref>
              <NavLink text='Contact' />
            </Link>
          </li>
        </ul>
      </nav>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        body {
          background: #000;
          color: #C5C5C5;
          height: 100%;
          font: 100% Source Sans Pro,Arial,sans-serif;
              font-weight: normal;
          font-weight: 300;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
        }

        ul,
        ol,
        dl {
          margin: 0;
          padding: 0;
        }

        .header .nav-items.nav-items-large a {
          font-size: 1.1em;
        }
        .header .nav-items a {
          color: #d4d4d4;
        }
        .header .nav-items a:hover,
        .header .nav-items a:focus,
        .header .nav-items a.active {
          color: #fff;
        }

        .nav
        .nav a {
          color: #adadad;
          position: relative;
          z-index: 6;
        }
        .nav a:hover,
        .nav a:focus {
          outline: 0 none;
        }

        .nav a span {
          display: block;
          transform: skew(-28.3deg) !important;
        }

        .nav a {
          display: block;
          transition: all 0.5s ease;
        }

        .nav a:hover,
        .nav a:focus,
        .nav a.active {
          background: #121212;
          color: #fff;
        }
        .nav-items-large a {
          padding: 1.1em 1.2em;
          font-size: 1.23em;
        }

        .nav-items-small a {
          padding: 0.5em 0.8em;
          font-size: 1em;
        }
        @media (min-width: 1000px) {
          .nav-items-small a {
            padding: 0.5em 0.95em;
          }
        }
        .nav li.no-anchor.active,
        .nav li.active a {
          background: #121212;
          color: #fff;
        }

      `}</style>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }


        .header {
          position: fixed;
          top: 0;
          z-index: 20;
          background: rgba(40,40,40,0.95);
          border-bottom: solid 3px #121212;
          box-shadow: 0 5px 12px #121212;
        }
        @media (min-width: 1040px) {
          .header {
            width: 110% !important;
            margin: 0 -5% !important;
            transform: skew(28.3deg);
          }
        }
        .header .nav-items {
          background: none;
          display: inline-block;
        }

        .header nav {
          text-align: center;
        }

        .nav {
          display: none;
          vertical-align: top;
          text-align: center;
          background: rgba(40,40,40,0.95);
        }
        @media (min-width: 1040px) {
          .nav {
            display: block;
          }
        }
        .nav li {
          float: left;
          list-style-type: none;
        }
      `}</style>
    
    </header>
  )
};

export default Header;
