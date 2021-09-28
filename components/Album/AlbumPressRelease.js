import styles from './AlbumPressRelease.module.scss';

const AlbumPressRelease = ({ press }) => (
  <ul className={styles.container}>
    {press.map((pressHtml, index) => (
      <li
        key={index}
        dangerouslySetInnerHTML={{ __html: pressHtml }}
      />
    ))}
  </ul>
)

export default AlbumPressRelease;
