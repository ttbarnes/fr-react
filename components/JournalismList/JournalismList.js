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
            aria-hidden='true'
            alt=''
          />

          <a
            href={article.externalLink}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.listItemLink}
            aria-label={article.title}
          >
            <div>
              <p className={styles.title} aria-hidden='true'>{article.title}</p>
              <p className={styles.copy} aria-hidden='true'>{article.copy}</p>
              <p className={styles.readMore} aria-hidden='true'>Read more</p>
            </div>
          </a>
        </div>

      </li>
    ))}
  </ul>
);

export default JournalismList;
