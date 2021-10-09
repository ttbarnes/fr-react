import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import CONSTANTS from '../../constants';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer} role='contentinfo'>

    <div className={styles.container}>
      <div className={styles.containerInner}>

        <p className={styles.heading} aria-hidden='true'>Follow Fiona</p>

        <SocialLinks />

        <p className={styles.emailUpdatesHeading}>
          <a
            className={`link-highlight-hover-border ${styles.emailUpdatesLink}`}
            href={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Sign up for gigs and announcements'
          >Gigs and announcements</a>
        </p>

        <p className={styles.privacyPolicyLink}>
          <Link href={`${CONSTANTS.BASE_URL}/privacy-policy`}>Privacy Policy</Link>
        </p>

      </div>

    </div>

  </footer>
);

export default Footer;
