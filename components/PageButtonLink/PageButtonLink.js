import PropTypes from 'prop-types';
import Link from 'next/link';
import { Source_Sans_3 } from 'next/font/google';
import styles from './PageButtonLink.module.scss';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
});

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
      <Link href={href} legacyBehavior>
        <a className={`button ${sourceSans.className} ${styles.link}`}>
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
          <Link href={footerLink.href} legacyBehavior>
            <a className={`${sourceSans.className} ${styles.link} ${styles.footerLink}`}>{footerLink.text}</a>
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
