import styles from './CloseButton.module.scss';

const CloseButton = ({
  onSetModalOpen
}) => (
  <div
    className={`bm-cross-button ${styles.bmCrossButtonContainer}`}
  >

    <button
      onClick={() => onSetModalOpen(false)}
      id='gallery-cross-btn'
      className={styles.bmCrossButton}
    >Close dialog</button>

    <span className={styles.spanContainer}>
      <span className={`${styles.span} ${styles.span1}`} />
      <span className={`${styles.span} ${styles.span2}`} />
    </span>
  </div>
);

export default CloseButton;
