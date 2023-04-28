import PropTypes from 'prop-types';
import styles from './ExternalLinksList.module.scss';

const ExternalLinksListItem = ({ externalLink, title, author, image }) => (
  <li className={styles.listItem}>
    <a
      href={externalLink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${title} by ${author}`}
      className={styles.link}
    >
      <div className={styles.imageColumn}>
        <img src={image.cloudinaryUrl} alt={`Screenshot of ${title} by ${author}`} />
      </div>

      <div className={styles.copyColumn}>
        <h2 className={`h4-size ${styles.title}`}>{title}</h2>
      </div>
    </a>
  </li>
);

ExternalLinksListItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.shape({
    cloudinaryUrl: PropTypes.string  
  })
};

const ExternalLinksList = ({ items, heading }) => (
  <ul
    className={`no-list-style ${styles.list}`}
    aria-label={heading}
  >
    {items.map((article, index) => (
      <ExternalLinksListItem
        key={`${article.title}-${index}`}
        {...article}
      />
    ))}
  </ul>
);

ExternalLinksList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
  })).isRequired
};

export default ExternalLinksList;
