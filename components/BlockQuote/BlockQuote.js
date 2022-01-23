import styles from './BlockQuote.module.scss';

const BlockQuote = ({
  copy,
  author,
  isMedium,
  isLarge,
  isHighlight,
  isShort,
  centered,
  isLong
}) => {
  let containerClassName = styles.blockquote;

  if (isMedium) {
    containerClassName = `${containerClassName} ${styles.blockquoteMedium}`;
  }

  if (isLarge) {
    containerClassName = `${containerClassName} ${styles.blockquoteLarge}`;
  }

  if (isHighlight) {
    containerClassName = `${containerClassName} ${styles.highlightQuote}`;
  }

  if (isShort) {
    containerClassName = `${containerClassName} ${styles.shortQuote}`;
  }

  if (centered) {
    containerClassName = `${containerClassName} ${styles.centered}`;
  }

  if (isLong) {
    containerClassName = `${containerClassName} ${styles.longQuote}`;
  }

  return (
    <blockquote className={containerClassName}>
      <span className={styles.copy}>
        <span className={[styles.quote, styles.quoteFirst].join(' ')}>&ldquo;</span>
        <span className={styles.inner} dangerouslySetInnerHTML={{ __html: copy }} />
        <span className={[styles.quote, styles.quoteLast].join(' ')}>&rdquo;</span>
      </span>

      {author && (
        <span className={styles.author}>{author}</span>
      )}
    </blockquote>
  );
};

export default BlockQuote;
