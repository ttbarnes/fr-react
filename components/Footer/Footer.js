import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import CONSTANTS from '../../constants';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer} role='contentinfo'>

    <div className={styles.container}>
      <div className={styles.containerInner}>

        <h4 className={styles.heading}>Follow Fiona</h4>

        <SocialLinks />

        <h5 className={styles.emailUpdatesHeading}>
          <a className={`link-highlight-hover-border ${styles.emailUpdatesLink}`} href={process.env.NEXT_PUBLIC_MAILCHIMP_URL} target='_blank' rel='noopener noreferrer'>Gigs and announcements</a>
        </h5>

        <p className={styles.privacyPolicyLink}>
          <Link href={`${CONSTANTS.BASE_URL}/privacy-policy`}>Privacy Policy</Link>
        </p>

      </div>

    </div>

  </footer>
);

export default Footer;
