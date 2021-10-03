import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>

    <div className={styles.container}>
      <div className={styles.containerInner}>

        <h4 className={styles.heading}>Follow Fiona</h4>

        <SocialLinks />

        <h5 className={styles.emailUpdatesHeading}>
          <a className={`link-highlight-hover-border ${styles.emailUpdatesLink}`} href={process.env.NEXT_PUBLIC_MAILCHIMP_URL} target='_blank' rel='noopener noreferrer'>Sign up for email updates</a>
        </h5>

        <p className={styles.privacyPolicyLink}>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </p>

      </div>

    </div>

  </footer>
);

export default Footer;
