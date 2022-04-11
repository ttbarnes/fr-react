import styles from './Gallerylist.module.scss';

const GalleryList = ({
  images,
  onSetModalOpen,
  onSetSelectedImage
}) => (
  <ul className={`no-list-style ${styles.list}`}>
    {images.map((image) => (
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
    ))}
  </ul>
);

export default GalleryList;
