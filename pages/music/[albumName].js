import ALBUMS from '../../data/albums.json';
import Album from '../../components/Album';

const AlbumPage = ({ album }) => {
  return (
    <div className='container'>
      <div className='include-bg-img'>
        <div className='main-content container-small'>

          <Album {...album} />

        </div>
      </div>
    </div>
  );
};

const cleanAlbumNameFromData = (albumName) =>
  albumName.replaceAll(',', '').toLowerCase();

export async function getServerSideProps(context) {
  const { albumName } = context.query;
  
  const albumNameDecoded = albumName.replaceAll('-', ' ')

  const album = ALBUMS.find((album) =>
    cleanAlbumNameFromData(album.name) === albumNameDecoded.toLowerCase()
  );

  const formattedAlbumImageName = cleanAlbumNameFromData(album.name).replaceAll(' ', '-').toLowerCase();

  return {
    props: {
      album: {
        ...album,
        formattedAlbumImageName
      }
    }
  };
}


export default AlbumPage;
