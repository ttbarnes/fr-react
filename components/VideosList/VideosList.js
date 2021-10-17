import styles from './VideosList.module.scss';

const VideosList = ({ videos }) => (
  <ul className='no-list-style'>
    {videos.map((video, index) => (
      <li
        key={index}
        className={styles.listItem}
      >
        <div dangerouslySetInnerHTML={{ __html: video }} />
      </li>
    ))}
  </ul>
);

export default VideosList;
