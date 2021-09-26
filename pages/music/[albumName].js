import ALBUMS from '../../data/albums.json';

const Album = ({ album }) => {
  return (
    <p>{album.name}</p>
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


export default Album;
