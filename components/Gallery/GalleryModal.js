import { useState } from 'react';
import ReactModal from 'react-modal';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import ArrowNavButtons from './ArrowNavButtons';
import CloseButton from './CloseButton';
import styles from './GalleryModal.module.scss';


const slideRenderer = (key, images, selectedImageIndex) => {
  const image = images[selectedImageIndex];

  let imgClassName = styles.modalImage;
  return (
    <div
      key={`${key}-${image.url}`}
      className={styles.modalImageListItem}
    >
      <div>
        <img
          src={`/images/gallery/${image.url}`}
          alt={`Photo by ${image.caption}`}
          className={styles.modalImage}
        />
      </div>

      <div className={styles.swipeableImageOverlay} />

      {image.caption && (
        <div className={styles.caption}>
          <p>Photo by {image.caption}</p>
        </div>
      )}
    </div>
  );
};

const GalleryModal = ({
  images,
  modalOpen,
  onSetModalOpen,
  selectedImageIndex,
  onSetSelectedImage
}) => {
  ReactModal.setAppElement('#main');

  const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
  const VirtualizeSwipeableViews = virtualize(BindKeyboardSwipeableViews);

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
        <VirtualizeSwipeableViews
          enableMouseEvents
          index={selectedImageIndex}
          overscanSlideBefore={1}
          overscanSlideAfter={1}
          onChangeIndex={(newIndex) => {
            let newSelectedImage;

            if (newIndex < 0) {
              const lastImageIndex = images.length - 1;
              newSelectedImage = images[lastImageIndex];
            } else if (newIndex === images.length) {
              newSelectedImage = images[0];
            } else {
              newSelectedImage = images[newIndex];
            }
            onSetSelectedImage(newSelectedImage);
          }}
          slideRenderer={({key, index}) => {
            return slideRenderer(key, images, selectedImageIndex)
          }}
        />
      </div>

      <ArrowNavButtons
        images={images}
        selectedImageIndex={selectedImageIndex}
        onSetSelectedImage={onSetSelectedImage}
      />

      <CloseButton onSetModalOpen={onSetModalOpen} />

    </ReactModal>
  );
};

export default GalleryModal;
