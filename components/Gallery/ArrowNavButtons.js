import styles from './ArrowNavButtons.module.scss';

const ArrorNavButtons = ({
  type
}) => (
  <>
    <button
      className={`${styles.previousNextButton} ${styles.previousButton}`}
      aria-label='View previous image'
    >
      <span className={styles.arrowPreviousContainer}>
        <span className={`${styles.arrowLine} ${styles.arrowPreviousLine1}`} />
        <span className={`${styles.arrowLine} ${styles.arrowPreviousLine2}`} />
      </span>
    </button>

    <button
      className={`${styles.previousNextButton} ${styles.nextButton}`}
      aria-label='View next image'
    >
      <span className={styles.arrowNextContainer}>
        <span className={`${styles.arrowLine} ${styles.arrowNextLine1}`} />
        <span className={`${styles.arrowLine} ${styles.arrowNextLine2}`} />
      </span>
    </button>
  </>
);

export default ArrorNavButtons;
