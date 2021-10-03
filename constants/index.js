const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const META_TAGS = {
  TITLE: 'Fiona Ross - Jazz Vocalist, Pianist, Composer, Producer and Journalist',
  DESCRIPTION: 'Award Winning Vocalist, Pianist, Composer, Producer and Journalist. Fierce and Non Compliant out now',
  KEYWORDS: 'Fiona Ross, jazz, vocalist, pianist, composer, musician, singer, songwriter, producer, journalist, london',
  AUTHOR: 'Fiona Ross',
  OG_IMAGE: 'fb-1200w.jpg',
  OG_DESCRIPTION: 'It\’s just me doing my thing',
  TWITTER_CARD: 'summary_large_image',
  FACEBOOK_APP_ID: '1779328982334234',
  GOOGLE_SITE_VERIFICATION_1: 'vXuozyxCB7mdGABhxU9iHpi7J3Im4arLmV9Vsafglek',
  GOOGLE_SITE_VERIFICATION_2: 'FH7egYUXkadqdTcqSrkfz7LEwpq8zNPAgtOwe30lhFk',
  GOOGLE_SITE_VERIFICATION_3: 'Zufww4tx2Bd3L3_sbkbGO3JM',
  MICROSOFT_VERFICATION: 'D7C8745E72774627634DE53DDB0DA645'
};

const ALBUM_COVER_IMAGE_SIZES = {
  'fierce-and-non-compliant': {
    WIDTH: 600,
    HEIGHT: 600
  },
  'just-me-and-sometimes-someone-else': {
    WIDTH: 600,
    HEIGHT: 600
  },
  'black-white-and-a-little-bit-of-grey': {
    WIDTH: 1250,
    HEIGHT: 1250
  },
  'a-twist-of-blue': {
    WIDTH: 600,
    HEIGHT: 600
  },
};

const SOCIAL_MEDIA_URLS = {
  SPOTIFY: 'https://play.spotify.com/artist/59lPcyDIZJxmRqatvAjct8?play=true',
  TWITTER: 'http://twitter.com/fifross',
  FACEBOOK: 'http://facebook.com/fionarossmusic',
  INSTAGRAM: 'https://www.instagram.com/fifi_ross',
  YOUTUBE: 'https://www.youtube.com/channel/UC9srPEZZNgnsM23Q777HbzA'
};

export default {
  BASE_URL,
  META_TAGS,
  ALBUM_COVER_IMAGE_SIZES,
  SOCIAL_MEDIA_URLS
};
