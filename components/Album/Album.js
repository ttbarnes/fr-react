import Link from 'next/link';
import DownloadLinks from './DownloadLinks';
import AlbumPressRelease from './AlbumPressRelease';
import AlbumTextList from './AlbumTextList';
import AlbumQuotes from './AlbumQuotes';
import CtaLink from './CtaLink';
import styles from './Album.module.scss'

const Album = (album) => {
  const renderLastRowColumns = (album.description
    || album.tracklist
    || album.albumCredits
    || album.pressRelease
    || album.renderQuotes
    || album.tracklistNote);

  return (
    <div className={styles.container}>

      <div className='row'>

        <div className={`col-50-md ${styles.colFirst}`}>
          <img src={`/images/albums/${album.imageName}.jpg`} alt={`Fiona Ross - ${album.name}`} />
        </div>

        <div className={`col-50-md ${styles.colLast}`}>

          <h2>{album.name}</h2>

          {(!album.comingSoon && album.albumType === 'latest') && (
            <p className={styles.comingSoonDesktopOnly}>Out now</p>
          )}

          <DownloadLinks links={album.urls} />

          <div className='row'>

            {album.canOrderAudioCd && (
              <p className={styles.audioCdLink}>
                <Link href={`/music/${album.formattedName}/audio-cd`}>
                  <a className='link-highlight-hover-border'>Get a signed audio CD</a>
                </Link>
              </p>
            )}

            {album.renderReviewsLink && (
              <CtaLink
                href={`/music/${album.formattedName}/reviews`}
                text='Reviews'
              />
            )}

            {album.renderPressLink && (
              <CtaLink
                href='/press'
                text='Press'
              />
            )}

            {album.writtenBy && (
              <div
                dangerouslySetInnerHTML={{ __html: album.writtenBy }}
                className='row'
              />
            )}

          </div>

        </div>

      </div>

      {renderLastRowColumns && (
        <div className='row'>

          <div className={`col-50-md ${styles.colFirst} ${styles.lastRowColFirst}`}>

            {album.description && (
              <p className={styles.description}>{album.description}</p>
            )}

            {(album.tracklist && album.albumCredits) && (
              <AlbumTextList
                list={album.albumCredits}
                listType='dl'
              />
            )}

            {album.pressRelease && (
              <AlbumPressRelease press={album.pressRelease} />
            )}

          </div>

          <div className={`col-50-md ${styles.colLast}`}>

            {(album.renderQuotes && album.quotes) && (
              <AlbumQuotes quotes={album.quotes} />
            )}

            {(album.albumCredits && !album.tracklist) && (
              <AlbumTextList
                list={album.albumCredits}
                listType='dl'
              />
            )}

            {(album.albumCredits && album.tracklist) && (
              <div>
                <AlbumTextList
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
      )}

    </div>
  );
};

export default Album;
