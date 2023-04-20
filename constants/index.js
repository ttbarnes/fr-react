const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const META_TAGS = {
  TITLE: 'Fiona Ross - Jazz Vocalist, Pianist, Composer, Producer and Journalist',
  DESCRIPTION: 'Award Winning Vocalist, Pianist, Composer, Producer and Journalist. 7 Songs in 7 Days out now',
  KEYWORDS: 'Fiona Ross, jazz, vocalist, pianist, composer, musician, singer, songwriter, producer, journalist, london',
  AUTHOR: 'Fiona Ross',
  OG_DESCRIPTION: 'It\’s just me doing my thing',
  TWITTER_CARD: 'summary_large_image',
  FACEBOOK_APP_ID: '1779328982334234',
  GOOGLE_SITE_VERIFICATION_1: 'vXuozyxCB7mdGABhxU9iHpi7J3Im4arLmV9Vsafglek',
  GOOGLE_SITE_VERIFICATION_2: 'FH7egYUXkadqdTcqSrkfz7LEwpq8zNPAgtOwe30lhFk',
  GOOGLE_SITE_VERIFICATION_3: 'Zufww4tx2Bd3L3_sbkbGO3JM',
  MICROSOFT_VERFICATION: 'D7C8745E72774627634DE53DDB0DA645'
};

const PAGE = {
  ABOUT: {
    TITLE: `About - ${META_TAGS.AUTHOR}`,
    DESCRIPTION: 'Award winning vocalist, pianist, composer and producer',
    URL: `${BASE_URL}/about`
  },
  COLLABORATORS: {
    TITLE: `Collaborators - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/collaborators`
  },
  CONTACT: {
    TITLE: `Contact - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/contact`
  },
  GALLERY: {
    TITLE: `Gallery - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/gallery`
  },
  GALLERY_SIGNED_PHOTO: {
    TITLE: `Signed Photo - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/gallery/signed-photo`
  },
  GIGS: {
    TITLE: `Gigs - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/gigs`
  },
  HOME: {
    TITLE: META_TAGS.TITLE,
    URL: BASE_URL,
  },
  JOURNALISM: {
    TITLE: `Journalism - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/journalism`
  },
  MUSIC: {
    TITLE: `Music - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/music`
  },
  NEWS: {
    TITLE: `News - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/news`
  },
  PRIVACY_POLICY: {
    TITLE: `Privacy Policy - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/privacy-policy`
  },
  PRESS: {
    TITLE: `Press - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/press`
  },
  REFLECTIONS_IN_BLUE: {
    TITLE: `Reflections in Blue by Audrey Ross`,
    URL: `${BASE_URL}/reflections-in-blue-by-audrey-ross`
  },
  VIDEOS: {
    TITLE: `Videos - ${META_TAGS.AUTHOR}`,
    URL: `${BASE_URL}/videos`
  }
};

const SOCIAL_MEDA_IMAGE_SIZE = {
  WIDTH: 1024,
  HEIGHT: 512
};

const SOCIAL_MEDIA_URLS = {
  BANDCAMP: 'https://fionarossjazz.bandcamp.com',
  SPOTIFY: 'https://play.spotify.com/artist/59lPcyDIZJxmRqatvAjct8?play=true',
  TWITTER: 'http://twitter.com/fifross',
  FACEBOOK: 'http://facebook.com/fionarossmusic',
  INSTAGRAM: 'https://www.instagram.com/fifi_ross',
  YOUTUBE: 'https://www.youtube.com/channel/UC9srPEZZNgnsM23Q777HbzA'
};

const JOURNALISM_CATEGORIES = {
  WIJM: {
    TEXT: 'Women in Jazz Media',
    VALUE: 1,
    IMAGE_URL: '/images/categories/journalism/temp.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.JOURNALISM.URL}/category/1`
  },
  JAZZ_IN_EUROPE: {
    TEXT: 'Jazz in Europe',
    VALUE: 2,
    IMAGE_URL: '/images/categories/journalism/temp.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.JOURNALISM.URL}/category/2`
  },
  KIND_OF_JAZZ: {
    TEXT: 'Kind of Jazz',
    VALUE: 3,
    IMAGE_URL: '/images/categories/journalism/temp.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.JOURNALISM.URL}/category/3`
  },
  JAZZ_QUARTERLY: {
    TEXT: 'Jazz Quarterly',
    VALUE: 4,
    IMAGE_URL: '/images/categories/journalism/temp.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.JOURNALISM.URL}/category/4`
  },
  OTHER: {
    TEXT: 'Other',
    VALUE: 5,
    IMAGE_URL: '/images/categories/journalism/temp.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.JOURNALISM.URL}/category/5`
  }
};

const PRESS_CATEGORIES = {
  REVIEWS: {
    TEXT: 'Reviews',
    VALUE: 1,
    IMAGE_URL: '/images/categories/press/reviews.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.PRESS.URL}/category/1`
  },
  INTERVIEWS: {
    TEXT: 'Interviews',
    VALUE: 2,
    IMAGE_URL: '/images/categories/press/interviews.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.PRESS.URL}/category/2`
  },
  OTHER: {
    TEXT: 'Other',
    VALUE: 3,
    IMAGE_URL: '/images/categories/press/other.jpg',
    // TODO: category title?
    // update PAGES with category.
    ROUTE: `${PAGE.PRESS.URL}/category/3`
  }
};

export default {
  BASE_URL,
  BASE_URL,
  META_TAGS,
  PAGE,
  SOCIAL_MEDA_IMAGE_SIZE,
  SOCIAL_MEDIA_URLS,
  JOURNALISM_CATEGORIES,
  PRESS_CATEGORIES
};
