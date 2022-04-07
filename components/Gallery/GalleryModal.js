import ReactModal from 'react-modal';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import ArrowNavButtons from './ArrowNavButtons';
import CloseButton from './CloseButton';
import styles from './GalleryModal.module.scss';

const GalleryModal = ({
  images,
  modalOpen,
  onSetModalOpen,
  selectedImageIndex,
  onSetSelectedImage
}) => {
  ReactModal.setAppElement('#main');

  const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => onSetModalOpen(false)}
      contentLabel='Fiona Ross Gallery'
      aria={{
        labelledby: "heading",
        describedby: "full_description"
      }}
      className={styles.overlayContent}
      overlayClassName={styles.overlay}
    >

      <div className={styles.swipeableContainer}>
        <BindKeyboardSwipeableViews
          enableMouseEvents
          springConfig={{
            duration: '3s',
            delay: '1s'
          }}
          index={selectedImageIndex}
          onChangeIndex={(newIndex) => {
            const newCurrentImage = images[newIndex];
            onSetSelectedImage(newCurrentImage);
          }}
        >
            {images.map((image) => (
              <div
                key={image.url}
                className={styles.modalImageListItem}
              >
                <div>
                  <img
                    src={`/images/gallery/${image.url}`}
                    alt={`Photo by ${image.caption}`}
                    className={styles.modalImage}
                  />
                </div>
                <div
                  className={styles.swipeableImageOverlay}
                />
              </div>
            ))}
        </BindKeyboardSwipeableViews>
      </div>

      <ArrowNavButtons />

      <CloseButton onSetModalOpen={onSetModalOpen} />

    </ReactModal>
  );
};

export default GalleryModal;
