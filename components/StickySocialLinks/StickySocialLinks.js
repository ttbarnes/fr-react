import SocialLinks from '../SocialLinks';
import styles from './StickySocialLinks.module.scss';

const StickySocialLinks = () => (
  <div className={styles.container} role='complementary'>
    <SocialLinks isSticky />
  </div>
);

export default StickySocialLinks;
