import styles from './AlbumPressRelease.module.scss';

const AlbumPressRelease = ({ press }) => (
  <ul>
    {press.map((pressHtml, index) => (
      <li
        key={index}
        dangerouslySetInnerHTML={{ __html: pressHtml }}
        className={styles.listItem}
      />
    ))}
  </ul>
)

export default AlbumPressRelease;
