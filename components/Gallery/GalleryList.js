import CONSTANTS from '../../constants';
import styles from './GalleryList.module.scss';

const GalleryList = ({
  jsEnabled,
  images,
  onSetModalOpen,
  onSetSelectedImage
}) => (
  <ul className={`no-list-style ${styles.list}`}>
    {images.map((image) => {
      if (jsEnabled) {
        return (
          <li
            key={image.url}
            onClick={() => {
              onSetSelectedImage(image);
              onSetModalOpen(true);
            }}
            className={styles.listItem}
          >
            <img
              src={`/images/gallery/${image.url}`}
              alt={`Photo by ${image.caption}`}
              className={styles.listItemImage}
            />
          </li>
        ); 
      }

      return (
        <li
          key={image.url}
          className={styles.listItem}
        >
          <a href={`${CONSTANTS.BASE_URL}/gallery/${image.url}`}>
            <img
              src={`/images/gallery/${image.url}`}
              alt={`Photo by ${image.caption}`}
              className={styles.listItemImage}
            />
          </a>
        </li>
      );
    })}
  </ul>
);

export default GalleryList;
