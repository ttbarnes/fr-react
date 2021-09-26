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

export async function getServerSideProps(context) {
  const { albumName } = context.query;
  
  const albumNameDecoded = albumName.replaceAll('-', ' ');

  const album = ALBUMS.find((album) =>
    album.name.toLowerCase() === albumNameDecoded.toLowerCase()
  );

  return { props: { album } };
}


export default AlbumPage;
