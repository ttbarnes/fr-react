import React from 'react';
import styles from './Link.module.scss';

const Link = ({
  url,
  isMailTo
}) => (
  <React.Fragment>
    <i className={`icon-link ${styles.linkIcon}`} />
    <a
      href={isMailTo ? `mailto:${url}` : url}
      target='_blank'
      rel='noopener noreferrer'
      className={`link-highlight-hover-border ${styles.link}`}
    >{url}</a>
  </React.Fragment>
);

export default Link;
