import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './PageButtonLink.module.scss';

const PageButtonLink = ({ href, text, icon}) => (
  <div className={`row ${styles.container}`}>
    <Link href={href}>
      <a className={`button ${styles.link}`}>
        <span className={styles.linkText}>{text}</span>
        <i className={`${icon} ${styles.linkIcon}`} />
      </a>
    </Link>
  </div>
);

PageButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
}

PageButtonLink.defaultProps = {
  icon: 'icon-arrow-right'
};

export default PageButtonLink;
