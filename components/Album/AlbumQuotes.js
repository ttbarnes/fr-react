import styles from './AlbumQuotes.module.scss';

const AlbumQuotes = ({ quotes }) => (
  <ul>
    {quotes.map((quote, index) => (
      <li key={index} className={styles.listItem}>
        <blockquote className={styles.blockquote}>
          <span className={styles.copy}>
            <span className={[styles.quote, styles.quoteFirst].join(' ')}>&ldquo;</span>
            <span className={styles.inner} dangerouslySetInnerHTML={{ __html: quote.copy }} />
            <span className={[styles.quote, styles.quoteLast].join(' ')}>&rdquo;</span>
          </span>
          <span className={styles.author}>{quote.author}</span>
        </blockquote>
      </li>
    ))}
  </ul>
);

export default AlbumQuotes;
