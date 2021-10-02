import ALBUMS from '../../../data/albums.json';
import BlockQuote from '../../../components/BlockQuote';
import PageButtonLink from '../../../components/PageButtonLink';

const AlbumReviewsPage = ({ album }) => (
  <div className='container with-page-bg-img'>
  
    <img
      src={`/images/background/${album.imageName}.png`}
      alt=''
      className={`page-img-bg ${album.imageName}`}
      aria-hidden='true'
    />

    <div className='main-content container-large'>

      <h2>{album.name} reviews</h2>

      <ul>
        {album.quotes.map((quote) => (
          <li key={quote.author}>
            <BlockQuote
              copy={quote.copy}
              author={quote.author}
              isLarge
            />
          </li>
        ))}
      </ul>

      <PageButtonLink
        href='/music'
        text='Music'
      />

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

  album.imageName = getImagePath(album.name);
  album.formattedName = albumName;

  return {
    props: { album }
  };
}

export default AlbumReviewsPage;
