import PropTypes from 'prop-types';
import Link from './Link';
import styles from './TextLinksSection.module.scss';

const TextLinksSection = ({
  heading,
  subText,
  groups
}) => (
  <div className='row'>

    <h2 className={`h3-size ${styles.heading}`}>{heading}</h2>

    {subText && (
      <p className={styles.subText}>{subText}</p>
    )}

    <ul
      className='no-list-style'
      aria-label={heading}
    >
      {groups.map((group) => {
        const {
          groupHeading,
          groupHeadingSubText,
          links
        } = group;

        if (groups.length > 1 ) {
          return (
            <li
              key={links[0].url}
              className={styles.groupMultiple}
            >
              <h3 className={`h3-size ${styles.heading} ${styles.groupHeading}`}>
                <span className='text-uppercase'>{groupHeading}</span>
                {groupHeadingSubText && (
                  <span> - {groupHeadingSubText}</span>
                )}
              </h3>

              <ul className='no-list-style' aria-label={`${heading} - ${groupHeading} - ${groupHeadingSubText}`}>
                {links.map((link) => {
                  const { url, isMailTo, text } = link;

                  return (
                    <li
                      key={link.url}
                      className={`${styles.listItem} ${styles.listItemNested}`}
                    >
                      <Link
                        url={url}
                        text={text}
                        isMailTo={isMailTo}
                      />
                    </li>
                  )
                })}
              </ul>
            </li>
          );
        }

        const firstAndOnlyLink = links[0];
        const { url, text, isMailTo } = firstAndOnlyLink;
            
        return (
          <li
            key={url}
            className={`${styles.listItem} ${styles.group}`}
          >
            <Link
              url={url}
              text={text ? text : url}
              isMailTo={isMailTo}
            />
          </li>
        )
      })}
    </ul>
  
  </div>
);

TextLinksSection.propTypes = {
  heading: PropTypes.string.isRequired,
  subText: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.shape({
    links: PropTypes.arrayOf(PropTypes.shape({
      groupHeading: PropTypes.string,
      groupHeadingSubText: PropTypes.string,
      url: PropTypes.string.isRequired,
      isMailTo: PropTypes.bool
    }))
  })).isRequired
};

export default TextLinksSection;
