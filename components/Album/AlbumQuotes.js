import BlockQuote from '../BlockQuote';
import styles from './AlbumQuotes.module.scss';

const AlbumQuotes = ({ quotes }) => (
  <ul className={`no-list-style ${styles.container}`} aria-label='Quotes'>
    {quotes.map((quote, index) => (
      <li key={`${quote.author}-${index}`} className={styles.listItem}>
        <BlockQuote
          copy={quote.copy}
          author={quote.author}
          shorterLineHeight
        />
      </li>
    ))}
  </ul>
);

export default AlbumQuotes;
