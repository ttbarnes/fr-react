import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './PageButtonLink.module.scss';

const PageButtonLink = ({
  href,
  text,
  subText,
  icon,
  footerLink,
  alignCenter
}) => {
  let containerClassName = `row ${styles.container}`;

  if (!alignCenter) {
    containerClassName = `${containerClassName} ${styles.alignLeft}`;
  }

  return (
    <div className={containerClassName}>
      <Link href={href}>
        <a className={`button ${styles.link}`}>
          <span className={styles.linkText}>
            {text}
            {subText && (
              <span>
                <br />
                <small className={styles.subText}>{subText}</small>
              </span>
            )}
          </span>
          <i className={`${icon} ${styles.linkIcon}`} />
        </a>
      </Link>

      {footerLink && (
        <div className='row'>
          <Link href={footerLink.href}>
            <a className={`${styles.link} ${styles.footerLink}`}>{footerLink.text}</a>
          </Link>
        </div>
      )}
    </div>
  );
};

PageButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
  icon: PropTypes.string,
  footerLink: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  alignCenter: PropTypes.bool
}

PageButtonLink.defaultProps = {
  icon: 'icon-arrow-right',
  alignCenter: true
};

export default PageButtonLink;
