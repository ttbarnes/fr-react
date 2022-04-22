import Head from 'next/head';
import TextLinksSection from '../../components/TextLinksSection';
import CONSTANTS from '../../constants';
import styles from './Contact.module.scss';

const ContactPage = () => (
  <div className='container with-page-bg-img'>

    <Head>
      <title>{CONSTANTS.PAGE.CONTACT.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.CONTACT.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.CONTACT.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.CONTACT.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.CONTACT.URL} />
    </Head>

    <img
      src={'/images/background/sofa.png'}
      alt=''
      className='page-img-bg'
      aria-hidden='true'
      role='presentation'
    />

    <div className={`main-content ${styles.container}`}>
      <h1 className={styles.heading}>Contact <span className='sr-only'>Fiona Ross</span></h1>

      <TextLinksSection
        heading='Get email updates'
        subText={`Gigs and announcements - your email won't be used for anything else.`}
        groups={[
          {
            links: [
              { url: process.env.NEXT_PUBLIC_MAILCHIMP_URL }
            ]
          }
        ]}
      />

      <TextLinksSection
        heading='Bookings'
        groups={[
          {
            links: [
              { url: 'info@fionaross.co.uk', isMailTo: true }
            ]
          }
        ]}
      />

      <TextLinksSection
        heading='Media and Public Relations'
        groups={[
          {
            groupHeading: 'Canada',
            groupHeadingSubText: 'Eric Alper',
            links: [
              { url: 'eric@thatericalper.com', isMailTo: true }
            ]
          },
          {
            groupHeading: 'UK & Europe',
            groupHeadingSubText: 'Pete Bassett',
            links: [
              { url: 'pete@quitegreat.co.uk', isMailTo: true },
              { url: ' http://quitegreat.co.uk' }
            ]
          }
        ]}
      />

    </div>

  </div>
);

export default ContactPage;
