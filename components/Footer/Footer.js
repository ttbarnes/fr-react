import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>

    <div className={styles.container}>
      <div className={styles.containerInner}>

        <h4>Follow Fiona</h4>

        <SocialLinks />

        <p>Form here</p>

        <p className={styles.privacyPolicyLink}>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </p>

      </div>

    </div>

  </footer>
);

export default Footer;
