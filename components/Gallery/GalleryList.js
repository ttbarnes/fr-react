const GalleryList = ({
  images,
  onSetModalOpen,
  onSetSelectedImage
}) => (
  <ul className='no-list-style'>
    {images.map((image) => (
      <li
        key={image.url}
        onClick={() => {
          onSetSelectedImage(image);
          onSetModalOpen(true);
        }}
        style={{
          float: 'left',
          width: '25%'
        }}
      >
        <img
          src={`/images/gallery/${image.url}`}
          alt={`Photo by ${image.caption}`}
        />
      </li>
    ))}
  </ul>
);

export default GalleryList;
