import styles from './JournalismList.module.scss'

const JournalismList = ({ articles }) => (
  <ul className='grid-layout-4-4 text-align-center'>
    {articles.map((article) => (
      <li
        key={article.title}
        className={`col-hover ${styles.listItem}`}
      >

        <div className={styles.listItemInner}>
          <img
            src={article.image.cloudinaryUrl}
            className={styles.listItemImage}
          />

          <a
            href={article.externalLink}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.listItemLink}
          >
            <div>
              <p className={styles.title}>{article.title}</p>
              <p className={styles.copy}>{article.copy}</p>
              <p className={styles.readMore}>Read more</p>
            </div>
          </a>
        </div>

      </li>
    ))}
  </ul>
);

export default JournalismList;
