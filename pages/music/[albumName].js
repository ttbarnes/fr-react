import ALBUMS from '../../data/albums.json';
import Album from '../../components/Album';

const AlbumPage = ({ albums }) => (
  <div className='container'>
    <div className='main-content container-small'>

      {albums.map((album) =>
        <Album {...album} />
      )}

    </div>
  </div>
);

// strip commas and brackets
const cleanAlbumName = (albumName) =>
  albumName.replace(/,|\(|\)/g, '');

const getImagePath = (albumName) =>
  cleanAlbumName(albumName).replaceAll(' ', '-').toLowerCase();

export async function getServerSideProps(context) {
  const { albumName } = context.query;
  
  const albumNameDecoded = albumName.replaceAll('-', ' ')

  const album = ALBUMS.find((album) =>
    cleanAlbumName(album.name).toLowerCase() === albumNameDecoded.toLowerCase()
  );

  const allOtherAlbums = ALBUMS.filter((a) => a.name !== album.name);

  const sortedAlbums = [
    album,
    ...allOtherAlbums
  ];

  sortedAlbums.map((a) => {
    const album = a;
    
    album.imageName = getImagePath(album.name);
    album.formattedName = albumName;

    return album;
  });

  return {
    props: {
      albums: sortedAlbums
    }
  };
}


export default AlbumPage;
