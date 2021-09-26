import styles from './DownloadLinks.module.scss'

const DownloadLinks = ({ links }) => { 
  if (links) {
    return (
      <ul className={styles.container}>
        {links.itunesPreOrder && (
          <li className={[styles.listItem, styles.listItemItunesPreOrder].join(' ')}>
            <a href={links.itunesPreOrder} target='_blank'>
              <img src='/images/icons/itunesPreOrder.svg' alt='Pre-order on iTunes' />
            </a>
          </li>
        )}

        {links.itunes && (
          <li className={styles.listItem}>
            <a href={links.itunes} target='_blank'>
              <img src='/images/icons/itunes.svg' alt='Get it on iTunes' />
            </a>
          </li>
        )}

        {links.google && (
          <li className={[styles.listItem, styles.listItemGooglePlay].join(' ')}>
            <a href={links.google} target='_blank'>
              <img src='/images/icons/google.svg' alt='Get it on Google Play' />
            </a>
          </li>
        )}

        {links.amazon && (
          <li className={[styles.listItem, styles.listItemAmazon].join(' ')}>
            <a href={links.amazon} target='_blank'>
              <img src='/images/icons/amazon.png' alt='Get it on Amazon' />
            </a>
          </li>
        )}
      </ul>
    )
  }

  return null;
}

export default DownloadLinks;
