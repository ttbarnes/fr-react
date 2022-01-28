import Link from 'next/link';
import DownloadLinks from './DownloadLinks';
import AlbumPressRelease from './AlbumPressRelease';
import AlbumTextList from './AlbumTextList';
import AlbumQuotes from './AlbumQuotes';
import CtaLink from './CtaLink';
import CONSTANTS from '../../constants';
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

        <h2 className={`${styles.albumHeading} ${styles.albumHeadingMobile}`}>{album.name}</h2>

        <div className={`col-50-md ${styles.colFirst}`}>
          <img
            src={`/images/albums/${album.imageName}.jpg`}
            alt={`Fiona Ross - ${album.name}`}
            className={styles.image}
          />
        </div>

        <div className={`col-50-md ${styles.colLast}`}>

          <h3 className={`${styles.albumHeading} ${styles.albumHeadingDesktop}`}>{album.name}</h3>

          {(!album.comingSoon && album.albumType === 'latest') && (
            <p className={styles.comingSoonDesktopOnly}>Out now</p>
          )}

          <DownloadLinks
            links={album.urls}
            albumName={album.name}
          />

          <div className='row'>

            {album.canOrderAudioCd && (
              <p className={styles.audioCdLink}>
                <Link href={`${CONSTANTS.BASE_URL}/music/album/${album.id}/audio-cd`}>
                  <a className='link-highlight-hover-border' aria-label={`Get a signed Audio CD of ${album.name}`}>Get a signed Audio CD</a>
                </Link>
              </p>
            )}

            {(album.renderReviewsLink || album.renderPressLink) && (
              <div className={styles.ctaLinksContainer}>

                {album.renderReviewsLink && (
                  <CtaLink
                    href={`/music/${album.formattedName}/reviews`}
                    text='Reviews'
                  />
                )}

                {album.renderPressLink && (
                  <CtaLink
                    href={`${CONSTANTS.BASE_URL}/press`}
                    text='Press'
                  />
                )}

              </div>
            )}

            {album.name === 'A Twist of Blue' && (
              <div>
                <br />
                <br />
              </div>
            )}

            {album.writtenBy && (
              <div
                dangerouslySetInnerHTML={{ __html: album.writtenBy }}
                className={`row ${styles.writtenBy}`}
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
                heading='Credits'
                list={album.albumCredits}
                listType='dl'
                alwaysShowHeading
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
                heading='Credits'
                list={album.albumCredits}
                listType='dl'
                withBackground
              />
            )}

            {(album.albumCredits && album.tracklist) && (
              <div>
                <AlbumTextList
                  heading='Tracklist'
                  list={album.tracklist}
                  listType='ol'
                  withBackground
                  alwaysShowHeading
                />

                {album.tracklistNote && (
                  <p className={styles.trackListNote}>*{album.tracklistNote}</p>
                )}
              </div>
            )}

            {album.liveBonusTracks && (
              <div>
                <AlbumTextList
                  heading='Live Bonus Tracks'
                  list={album.liveBonusTracks}
                  start={album.liveBonusTracksStartNumber}
                  listType='ol'
                  withBackground
                  alwaysShowHeading
                />
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};

export default Album;
