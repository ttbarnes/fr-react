import CONSTANTS from '../constants';

const links = [
  {
    route: CONSTANTS.BASE_URL,
    pathname: '/',
    text: 'Home'
  },
  {
    route: `${CONSTANTS.BASE_URL}/music`,
    pathname: '/music',
    text: 'Music'
  },
  {
    route: `${CONSTANTS.BASE_URL}/press`,
    pathname: '/press',
    text: 'Press'
  },
  {
    route: `${CONSTANTS.BASE_URL}/gigs`,
    pathname: '/gigs',
    text: 'Gigs'
  },
  {
    route: `${CONSTANTS.BASE_URL}/news`,
    pathname: '/news',
    text: 'News'
  },
  {
    route: `${CONSTANTS.BASE_URL}/videos`,
    pathname: '/videos',
    text: 'Videos'
  },
  {
    route: `${CONSTANTS.BASE_URL}/about`,
    pathname: '/about',
    text: 'About'
  },
  {
    route: `${CONSTANTS.BASE_URL}/gallery`,
    pathname: '/gallery',
    text: 'Gallery'
  },
  {
    route: `${CONSTANTS.BASE_URL}/collaborators`,
    pathname: '/collaborators',
    text: 'Collaborators'
  },
  {
    route: `${CONSTANTS.BASE_URL}/journalism`,
    pathname: '/journalism',
    text: 'Journalism'
  },
  {
    route: `${CONSTANTS.BASE_URL}/contact`,
    pathname: '/contact',
    text: 'Contact'
  }
];

export default links;
