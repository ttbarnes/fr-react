import styles from './BlockQuote.module.scss';

const BlockQuote = ({ copy, author }) => (
  <blockquote className={styles.blockquote}>
    <span className={styles.copy}>
      <span className={[styles.quote, styles.quoteFirst].join(' ')}>&ldquo;</span>
      <span className={styles.inner} dangerouslySetInnerHTML={{ __html: copy }} />
      <span className={[styles.quote, styles.quoteLast].join(' ')}>&rdquo;</span>
    </span>
    <span className={styles.author}>{author}</span>
  </blockquote>
);

export default BlockQuote;
