import PropTypes from 'prop-types';
import styles from './DownloadLinks.module.scss'

const DownloadLinks = ({ links, albumName }) => { 
  if (links) {
    return (
      <ul className={styles.container}>
        {links.itunesPreOrder && (
          <li className={[styles.listItem, styles.listItemItunesPreOrder].join(' ')}>
            <a href={links.itunesPreOrder} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/itunesPreOrder.svg' alt={`Pre-order ${albumName} on iTunes`} />
            </a>
          </li>
        )}

        {links.itunes && (
          <li className={styles.listItem}>
            <a href={links.itunes} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/itunes.svg' alt={`Get ${albumName} it on iTunes`} />
            </a>
          </li>
        )}

        {links.amazon && (
          <li className={[styles.listItem, styles.listItemAmazon].join(' ')}>
            <a href={links.amazon} target='_blank' rel='noopener noreferrer'>
              <img src='/images/icons/amazon.png' alt={`Get ${albumName} it on Amazon`} />
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
