import PropTypes from 'prop-types';
import styles from './DownloadLinks.module.scss'

const DownloadLinks = ({ links, albumName }) => { 
  if (links) {
    return (
      <ul className={styles.container}>

        {links.bandcamp && (
          <li className={[styles.listItem, styles.listItemBandCamp].join(' ')}>
            <a href={links.bandcamp} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/bandcamp.png' alt='Available at Bandcamp' />
            </a>
          </li>
        )}

        {links.spotify && (
          <li className={[styles.listItem, styles.listItemSpotify].join(' ')}>
            <a href={links.spotify} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/spotify.png' alt='Listen on Spotify' />
            </a>
          </li>
        )}

        {links.youtubeMusic && (
          <li className={[styles.listItem, styles.listItemYouTubeMusic].join(' ')}>
            <a href={links.youtubeMusic} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/youtube-music.png' alt='Listen on YouTube Music' />
            </a>
          </li>
        )}

        {links.amazon && (
          <li className={[styles.listItem, styles.listItemAmazon].join(' ')}>
            <a href={links.amazon} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/amazon-music.png' alt='Available on Amazon' />
            </a>
          </li>
        )}

        {links.itunes && (
          <li className={styles.listItem}>
            <a href={links.itunes} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/apple-itunes.svg' alt='Get it on iTunes Store' />
            </a>
          </li>
        )}

        {links.appleMusic && (
          <li className={styles.listItem}>
            <a href={links.appleMusic} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/apple-music.svg' alt='Listen on Apple Music' />
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
