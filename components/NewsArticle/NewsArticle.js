import PropTypes from 'prop-types';
import styles from './NewsArticle.module.scss';

const NewsArticle = ({
  _id,
  title,
  sections
}) => {
  const sectionImagesListClassName = (sectionImages) => {
    let className = `no-list-style ${styles.articleSectionImagesList}`;
    if (sectionImages.length === 1) {
      className = `${className} ${styles.articleSectionImagesList}`;
    }

    if (sectionImages.length > 1) {
      className = `${className} ${styles.articleSectionImagesListMultipleImages}`;
    }

    return className;
  };

  const sectionImagesListItemClassName = (sectionImages) => {
    let className = '';

    if (sectionImages.length === 1) {
      className = styles.articleSectionImageColumn;
    }

    if (sectionImages.length > 1) {
      className = styles.articleSectionImageColumnHasMultiple;
    }

    return className;
  };

  return (
    <div key={_id}>
      <h2>{title}</h2>

      {/*
                <p className={styles.date}>
                {format(new Date(fromUnixTime(article.createdAt)), 'MMM do')}
              </p>
              */}

      {sections && sections.map((section, index) => (
        <ul
          key={`${section._id}-${index}`}
          className={`no-list-style ${styles.articleSection}`}
        >
          <li>
            {section.copy && (
              <div
                dangerouslySetInnerHTML={{ __html: section.copy }}
                className={styles.articleSectionCopy}
              />
            )}

            {section.videoEmbed && (
              <div
                dangerouslySetInnerHTML={{ __html: section.videoEmbed }}
              />
            )}

            {section.images && (
              <ul className={sectionImagesListClassName(section.images)}>
                {section.images.map((image, index) => (
                  <li
                    key={`${image.cloudinaryUrl}-${index}`}
                    className={sectionImagesListItemClassName(section.images)}
                  >
                    <div className={styles.imgWrap}>
                      <img
                        className={`${styles.image} ${styles.articleSectionImage}`}
                        src={image.cloudinaryUrl} alt=''
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      ))}
    </div>
  )
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    copy: PropTypes.string,
    videoEmbed: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      cloudinaryUrl: PropTypes.string
    }))
  }))
};

export default NewsArticle;
