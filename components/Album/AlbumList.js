import styles from './AlbumList.module.scss';

const AlbumList = ({ listType, list }) => {
  if (list) {
    if (listType === 'ol') {
      return (
        <ol className={[styles.container, styles.containerOl].join(' ')}>
            {list.map(item => (
              <li
                key={item}
                className={styles.listItem}>
                  <span className={styles.listItemInner}>{item}</span>
              </li>
            ))}
          </ol>
      );
    } else if (listType === 'dl') {
      return (
        <dl className={[styles.container, styles.containerOl].join(' ')}>
          {list.map((item) => (
            <li
              key={item}
              className={styles.listItem}>
                <span className={styles.listItemInner}>{item}</span>
            </li>
          ))}
        </dl>
      );
    }
  }

  return null;
}

export default AlbumList;
