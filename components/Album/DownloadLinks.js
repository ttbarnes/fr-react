import PropTypes from 'prop-types';
import styles from './DownloadLinks.module.scss'

const DownloadLinks = ({ links, albumName }) => { 
  if (links) {
    return (
      <ul className={`no-list-style ${styles.container}`}>

        {links.bandcamp && (
          <li className={[styles.listItem, styles.listItemBandCamp].join(' ')}>
            <a href={links.bandcamp} target='_blank' rel='noopener noreferrer' aria-label={`${albumName} available at Bandcamp`}>
              <img src='/images/icons/bandcamp.png' alt='' />
              
            </a>
          </li>
        )}

        {links.spotify && (
          <li className={[styles.listItem, styles.listItemSpotify].join(' ')}>
            <a href={links.spotify} target='_blank' rel='noopener noreferrer' aria-label={`${albumName} listen on Spotify`}>
              <img src='/images/icons/spotify.png' alt='' />
              </a>
          </li>
        )}

        {links.youtubeMusic && (
          <li className={[styles.listItem, styles.listItemYouTubeMusic].join(' ')}>
            <a href={links.youtubeMusic} target='_blank' rel='noopener noreferrer' aria-label={`Listen to ${albumName} on YouTube Music`}>
              <img src='/images/icons/youtube-music.png' alt='' />
            </a>
          </li>
        )}

        {links.amazon && (
          <li className={[styles.listItem, styles.listItemAmazon].join(' ')}>
            <a href={links.amazon} target='_blank' rel='noopener noreferrer' aria-label={`${albumName} available on Amazon`}>
              <img src='/images/icons/amazon-music.png' alt='' />
            </a>
          </li>
        )}

        {links.itunes && (
          <li className={styles.listItem}>
            <a href={links.itunes} target='_blank' rel='noopener noreferrer' aria-label={`Get ${albumName} on iTunes Store`}>
              <img src='/images/icons/apple-itunes.svg' alt='' />
            </a>
          </li>
        )}

        {links.appleMusic && (
          <li className={styles.listItem}>
            <a href={links.appleMusic} target='_blank' rel='noopener noreferrer' aria-label={`Listen to ${albumName} on Apple Music`}>
              <img src='/images/icons/apple-music.svg' alt='' />
            </a>
          </li>
        )}

      </ul>
    )
  }

  return null;
}

DownloadLinks.propTypes = {
  links: PropTypes.shape({
    itunesPreOrder: PropTypes.string,
    itunes: PropTypes.string,
    google: PropTypes.string,
    amazon: PropTypes.string
  }).isRequired,
  albumName: PropTypes.string.isRequired
};

export default DownloadLinks;
