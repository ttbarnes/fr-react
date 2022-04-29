import styles from './PressList.module.scss';

const PressList = ({ articles }) => (
  <ul
    className='no-list-style'
    aria-label='Press articles'
  >
    {articles.map((article, index) => (
      <li
        key={`${article.title}-${index}`}
        className={`col-50-lg ${styles.listItem}`}
      >
        <div className={styles.listItemInner}>
          <a
            href={article.externalLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${article.title} by ${article.author}`}
            className={styles.listItemLink}
          >
            <p className={styles.author}>{article.author}</p>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.excerpt}>{article.excerpt}</p>
          </a>
        </div>
      </li>
    ))}
  </ul>
);

export default PressList;
