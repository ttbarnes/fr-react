import styles from './ArrowNavButtons.module.scss';

const ArrorNavButtons = ({
  images,
  selectedImageIndex,
  onSetSelectedImage
}) => (
  <>
    <button
      className={`${styles.previousNextButton} ${styles.previousButton}`}
      aria-label='View previous image'
      onClick={() => {
        const newIndex = selectedImageIndex - 1;
        const newSelectedImage = images[newIndex];
        onSetSelectedImage(newSelectedImage);
      }}
    >
      <span className={styles.arrowPreviousContainer}>
        <span className={`${styles.arrowLine} ${styles.arrowPreviousLine1}`} />
        <span className={`${styles.arrowLine} ${styles.arrowPreviousLine2}`} />
      </span>
    </button>

    <button
      className={`${styles.previousNextButton} ${styles.nextButton}`}
      aria-label='View next image'
      onClick={() => {
        const newIndex = selectedImageIndex + 1;
        const newSelectedImage = images[newIndex];
        onSetSelectedImage(newSelectedImage);
      }}
    >
      <span className={styles.arrowNextContainer}>
        <span className={`${styles.arrowLine} ${styles.arrowNextLine1}`} />
        <span className={`${styles.arrowLine} ${styles.arrowNextLine2}`} />
      </span>
    </button>
  </>
);

export default ArrorNavButtons;
