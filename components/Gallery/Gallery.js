import { useState, useEffect } from 'react';
import GalleryList from './GalleryList';
import GalleryModal from './GalleryModal';

const Gallery = ({
  images
}) => {
  const [jsEnabled, setJsEnabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setJsEnabled(true);
    }
  }, []);

  let selectedImageIndex = null;

  if (selectedImage) {
    selectedImageIndex = images.findIndex((image) =>
      image.url === selectedImage.url);
  }

  if (jsEnabled) {
    return (
      <>
        <GalleryList
          images={images}
          jsEnabled={jsEnabled}
          onSetSelectedImage={setSelectedImage}
          onSetModalOpen={setModalOpen}
        />

        <GalleryModal
          images={images}
          modalOpen={modalOpen}
          onSetModalOpen={setModalOpen}
          selectedImageIndex={selectedImageIndex}
          onSetSelectedImage={setSelectedImage}
        />
      </>
    );
  }

  return (
    <>
      <GalleryList
        jsEnabled={jsEnabled}
        images={images}
        onSetSelectedImage={setSelectedImage}
      />
    </>
  );
};

export default Gallery;
