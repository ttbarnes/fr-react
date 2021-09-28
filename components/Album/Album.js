import DownloadLinks from './DownloadLinks';
import AlbumPressRelease from './AlbumPressRelease';
import AlbumList from './AlbumList';
import styles from './Album.module.scss'

const Album = (album) => (
  <div className='album-layout-1'>

    <div className='row'>

      <div className={`col-50-md ${styles.colFirst}`}>
        <img src={`/images/albums/${album.formattedAlbumImageName}.jpg`} alt={`Fiona Ross - ${album.name}`} />
      </div>

      <div className={`col-50-md ${styles.colLast}`}>

        <h2>{album.name}</h2>
        {!album.comingSoon && (
          <p className={styles.comingSoonDesktopOnly}>Out now</p>
        )}

        <DownloadLinks links={album.urls} />

      </div>

    </div>

    <div className='row'>

      <div className={`col-50-md ${styles.colFirst} ${styles.lastRowColFirst}`}>

        {album.description && (
          <p className={styles.description}>{album.description}</p>
        )}

        {(album.tracklist && album.albumCredits) && (
          <AlbumList
            list={album.albumCredits}
            listType='dl'
          />
        )}

        {album.pressRelease && (
          <AlbumPressRelease press={album.pressRelease} />
        )}

      </div>

      <div className={`col-50-md ${styles.colLast}`}>

        {(album.albumCredits && !album.tracklist) && (
          <AlbumList
            list={album.albumCredits}
            listType='ol'
          />
        )}

        {(album.albumCredits && album.tracklist) && (
          <div>
            <AlbumList
              list={album.tracklist}
              listType='ol'
            />
            {album.tracklistNote && (
              <p>*{album.tracklistNote}</p>
            )}
          </div>
        )}

      </div>
    </div>

  </div>
);

export default Album;
