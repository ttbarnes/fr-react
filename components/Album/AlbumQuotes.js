import BlockQuote from '../BlockQuote';
import styles from './AlbumQuotes.module.scss';

const AlbumQuotes = ({ quotes }) => (
  <ul>
    {quotes.map((quote, index) => (
      <li key={index} className={styles.listItem}>
        <BlockQuote
          copy={quote.copy}
          author={quote.author}
        />
      </li>
    ))}
  </ul>
);

export default AlbumQuotes;
