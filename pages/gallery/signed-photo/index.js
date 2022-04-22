import Head from 'next/head';
import PageButtonLink from '../../../components/PageButtonLink';
import CONSTANTS from '../../../constants';
import styles from './SignedPhoto.module.scss';

const GallerySignedPhotPage = ({ cookieConsent }) => (
  <div className='container with-page-bg-img' id='main'>

    <Head>
      <title>{CONSTANTS.PAGE.GALLERY_SIGNED_PHOTO.TITLE}</title>

      <meta property='og:title' content={CONSTANTS.PAGE.GALLERY_SIGNED_PHOTO.TITLE} />
      <meta property='og:url' content={CONSTANTS.PAGE.GALLERY_SIGNED_PHOTO.URL} />

      <meta name='twitter:title' content={CONSTANTS.PAGE.GALLERY_SIGNED_PHOTO.TITLE} />
      <meta property='twitter:url' content={CONSTANTS.PAGE.GALLERY_SIGNED_PHOTO.URL} />
    </Head>

    <div className='main-content text-align-center'>
      <h1 className={`text-align-center ${styles.heading}`}><span className='sr-only'>Fiona Ross - </span> Free signed photo of Fi</h1>
      <p className={styles.subHeading}>limited edition</p>

      {cookieConsent ? (
        <p>Make a payment via PayPal and we'll dispatch as soon as possible.</p>
      ) : (
        <p className={styles.intro}>Contact <a href="mailto:info@fionaross.co.uk?subject=Fiona Ross - Free Signed Photo">info@fionaross.co.uk</a> for details. <br /> Or, clear your browser cookies, disable any cookie blockers and reload the page to accept PayPal cookies.</p>
      )}

      <ul className={`no-list-style ${styles.list}`}>
        <li className={styles.listItem}>
          {cookieConsent ? (
            <>
              <img src={`/images/signed-photo/1.jpg`} alt='Fiona Ross - Just me (and sometimes someone else) cover' />
              
              <form action="https://www.paypal.com/cgi-bin/webscr" method = "post" target = "_blank">
                <input type = "hidden" name = "cmd" value = "_xclick" />
                <input type="hidden" name="business" value="fiona@fionaross.co.uk" />
                <input type="hidden" name="lc" value="GB" />
                <input type="hidden" name="item_name" value="Signed Photo 1 Just me (and sometimes someone else) cover" />
                <input type="hidden" name="amount" value="0.00" />
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="shipping" value="0.00" />
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" className={`${styles.paypalButton} ${styles.paypalButtonLeft}`} />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </>
          ) : (
              <a href="mailto:info@fionaross.co.uk?subject=Fiona Ross - Free Signed Photo 1">
                <img src={`/images/signed-photo/1.jpg`} alt='Fiona Ross - Just me (and sometimes someone else) cover' />
              </a>
          )}
        </li>

        <li className={styles.listItem}>
          {cookieConsent ? (
            <>
              <img src={`/images/signed-photo/2.jpg`} alt='Fiona Ross - Twist Of Blue cover' />
            
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="fiona@fionaross.co.uk" />
                <input type="hidden" name="lc" value="GB" />
                <input type="hidden" name="item_name" value="Signed Photo 2 - Twist Of Blue cover" />
                <input type="hidden" name="amount" value="0.00" />
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="shipping" value="0.00" />
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" className={`${styles.paypalButton} ${styles.paypalButtonRight}`} />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </>
          ) : (
              <a href="mailto:info@fionaross.co.uk?subject=Fiona Ross - Free Signed Photo 2">
                <img src={`/images/signed-photo/2.jpg`} alt='Fiona Ross - Twist Of Blue cover' />
              </a>
          )}
        </li>

        <li className={styles.listItem}>
          {cookieConsent ? (
            <>
              <img src={`/images/signed-photo/3.jpg`} className={styles.listItem3Image} alt='Fiona Ross - Red Hair Chair shot' />

              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="fiona@fionaross.co.uk" />
                <input type="hidden" name="lc" value="GB" />
                <input type="hidden" name="item_name" value="Signed Photo 3 - Red Hair Chair shot" />
                <input type="hidden" name="amount" value="0.00" />
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="shipping" value="0.00" />
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" className={`${styles.paypalButton} ${styles.paypalButtonLeft}`} />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </>
          ): (
              <a href="mailto:info@fionaross.co.uk?subject=Fiona Ross - Free Signed Photo 3">
                <img src={`/images/signed-photo/3.jpg`} className={styles.listItem3Image} alt='Fiona Ross - Red Hair Chair shot' />
              </a>
          )}
        </li>

        <li className={`${styles.listItem} ${styles.listItem4}`}>
          {cookieConsent ? (
            <>
              <img src={`/images/signed-photo/4.jpg`} alt='Fiona Ross - Behind the scenes rehearsal shot' />

              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="fiona@fionaross.co.uk" />
                <input type="hidden" name="lc" value="GB" />
                <input type="hidden" name="item_name" value="Signed Photo 4 - Behind the scenes rehearsal shot" />
                <input type="hidden" name="amount" value="0.00" />
                <input type="hidden" name="currency_code" value="GBP" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="shipping" value="0.00" />
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" className={`${styles.paypalButton} ${styles.paypalButtonRight}`} />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </>
          ) : (
              <a href="mailto:info@fionaross.co.uk?subject=Fiona Ross - Free Signed Photo 4">
                <img src={`/images/signed-photo/4.jpg`} alt='Fiona Ross - Behind the scenes rehearsal shot' />
              </a>
          )}
        </li>
      </ul>

      <PageButtonLink
        href={`${CONSTANTS.BASE_URL}/gallery`}
        text='Gallery'
      />

    </div>

  </div>
);

export default GallerySignedPhotPage;
