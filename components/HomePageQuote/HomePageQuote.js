import styles from './HomePageQuote.module.scss';

const HomePageQuote = ({
  copy,
  author,
  isLast
}) => {
  let containerClassName = styles.blockquote;

  if (isLast) {
    containerClassName = `${containerClassName} + ${styles.blockquoteLast}`;
  }

  return (
    <blockquote className={containerClassName}>
      <span className={styles.quoteFirst}>&ldquo;</span>
      <span className={styles.copy}>{copy}</span>
      <span className={styles.author}>{author}</span>
      <span className={styles.quoteLast}>&rdquo;</span>
    </blockquote>
  );
};

export default HomePageQuote;
