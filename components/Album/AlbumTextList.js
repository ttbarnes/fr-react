import React from 'react';
import PropTypes from 'prop-types';
import styles from './AlbumTextList.module.scss';

const AlbumTextList = ({
  heading,
  list,
  listType,
  start,
  withBackground,
  alwaysShowHeading,
}) => {
  if (list && list.length) {
    const headingClassName = alwaysShowHeading ? `heading-uppercase ${styles.heading} ${styles.headingAlways}` : `heading-uppercase ${styles.heading}`;

    const listClassNames = withBackground ? `${styles.list} ${styles.listWithBackground}` : styles.list;

    if (listType === 'ol') {
      return (
        <div className={styles.container}>
          <h4 className={headingClassName}>{heading}</h4>

          <ol
            className={[listClassNames, styles.listOl].join(' ')}
            aria-label={heading}
            start={start}
          >
            {list.map(item => (
              <li
                key={`${listType}-${item}`}
                className={styles.listItem}>
                  <span className={styles.listItemInner}>{item}</span>
              </li>
            ))}
          </ol>

        </div>
      );
    } else if (listType === 'dl') {
      return (
        <div className={styles.container}>
          <h4 className={headingClassName}>{heading}</h4>

          <dl
            className={[listClassNames, styles.listDl].join(' ')}
            aria-label={heading}
            start={start}
          >
            {list.map((item) => (
              <React.Fragment key={`${listType}-${item}`}>
                <dt  />
                <dd
                  className={styles.listItem}>
                    <span>{item}</span>
                </dd>
              </React.Fragment>
            ))}
          </dl>

        </div>
      );
    }
  }

  return null;
}

AlbumTextList.propTypes = {
  heading: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  withBackground: PropTypes.bool
};

AlbumTextList.defaultProps = {
  withBackground: false
};

export default AlbumTextList;
