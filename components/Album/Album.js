import DownloadLinks from './DownloadLinks';
import styles from './Album.module.scss'

const Album = (album) => (
  <div className='album-layout-1'>

    <h1 className='sr-only'>{`Fiona Ross - ${album.name}`}</h1>

    <div className={`col-50-md ${styles.colFirst}`}>
      <img src='/images/albums/fierce-and-non-compliant.jpg' alt={`Fiona Ross - ${album.name}`} />
    </div>

    <div className={`col-50-md ${styles.colLast}`}>

      <h2>{album.name}</h2>


      {(!album.comingSoon && album.albumType === 'latest') && (
        <p className={styles.comingSoonDesktopOnly}>Out now</p>
      )}

      <DownloadLinks links={album.urls} />

    </div>

  </div>
);

export default Album;
