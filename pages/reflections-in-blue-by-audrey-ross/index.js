import Head from 'next/head';;
import CONSTANTS from '../../constants';
import PageContainer from '../../components/PageContainer';
import styles from './ReflectionsInBlue.module.scss';

const ReflectionsInBluePage = ({ cookieConsent }) => (
  <PageContainer>
    <div className='container'>

      <Head>
        <title>{CONSTANTS.PAGE.REFLECTIONS_IN_BLUE.TITLE}</title>

        <meta property='og:title' content={CONSTANTS.PAGE.REFLECTIONS_IN_BLUE.TITLE} />
        <meta property='og:url' content={CONSTANTS.PAGE.REFLECTIONS_IN_BLUE.URL} />

        <meta name='twitter:title' content={CONSTANTS.PAGE.REFLECTIONS_IN_BLUE.TITLE} />
        <meta property='twitter:url' content={CONSTANTS.PAGE.REFLECTIONS_IN_BLUE.URL} />
      </Head>

      <div className={`main-content ${styles.container}`}>
        <h1 className='text-align-center'>{CONSTANTS.PAGE.REFLECTIONS_IN_BLUE.TITLE}</h1>

        <div className={styles.intro}>
          <p>Reflections in Blue is a collection of 33 poems written by Audrey Ross (Fiona Ross’ Mother). In 1989, before being diagnosed with Alzheimer’s, Audrey wrote and created this collection but until now, had not published her work. There are only 50 copies available and 100% of the sales will go to Alzheimer's Research UK.</p>
          <p>"<i>The apocalyptic prose of this author are evocative of the timeless images of darkness and light</i>"</p>
        </div>

        <div className={`row ${styles.rowFirst}`}>
          <div className='col-40-md'>
            <img src='/images/reflections-in-blue/Audrey-Ross.jpg' alt='Audrey Ross' />
          </div>

          <div className={`col-60-md ${styles.colRight}`}>

            <div className={`text-align-center ${styles.excerpt}`}>
              <p className={styles.excerptInterludeTitle}>Interlude</p>

              <div className={styles.interlude}>
                Everything is dying now, <br />
                The bloom has gone, <br />
                Tress stand naked <br />
                Bereft of blossom <br />
                Long gone to drift <br />
                Upon a tideless ebb, <br />
                And weightless branches <br />
                Incline their limbs. <br />
                The woodland walls <br />
                And the wind blows <br />
                Through emptiness <br />
                As autumn fingers <br />
                Snatch at withered leaves. <br />
                Oh - sweet decay <br />
                Protect the earth awhile <br />
                From winter’s chill. <br />
                Life’s sweeter moments <br />
                Now seem all run out!
              </div>
            </div>

          
          </div>
        </div>
        
        <div className={`row ${styles.rowLast}`}>
          <div className='col-40-md'>
            <img src='/images/reflections-in-blue/Audrey-Ross-Reflections-in-Blue.jpg' alt='Audrey Ross - Reflections in Blue' />
          </div>

          <div className={`col-60-md ${styles.colRight} ${styles.colPaypal}`}>
            <p>Get a copy of this book for £10 via PayPal. <br />100% of the sales will go to Alzheimer's Research UK.</p>

            {cookieConsent ? (
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHVwYJKoZIhvcNAQcEoIIHSDCCB0QCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBIo1Htd9B73CdssOFhsJlKUGlNckAgFenLHp+Qx74qFHYgUdRqlsd5Uw0xOQEebi57mtd5qAS04KffYQnfS/ZRLtjCYldAJC9LFd3OwRKh8uhhsICPAQxudgeRspQH7+q8H/P/BoyVS/dFCoqn9Bk0zwZkjC0k9B234WT8t2W47TELMAkGBSsOAwIaBQAwgdQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIvwYoKoOmCzmAgbDGRT1xHTPcQ4TMFgjpSWShpejfnghGdwgKChIRloqIOkA1Nh73/E30hTnS8kEYfoIfTwt1RwHjk9wux6ORrrs90U47PJ51e1EqlVrzrsRQwCU+ibdknaPFdjca07UiMSG1awpH6ALGHtHfg0gLbe/Z4w3Von0gDY4g+absGmBY19CH2ETTX+FKVbxxRjJrAmmxGcPLXhr1jkW79bzXug5W0nQbnalqNBwub+rmZrLqHqCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE5MDYyOTEwNDkwMFowIwYJKoZIhvcNAQkEMRYEFG/q4DWHyyBiAq3fZT8qtKmdqOErMA0GCSqGSIb3DQEBAQUABIGAVLVaHIJZ+ZC+DmbqfHh3RjgUrMDO1PL2MYUYMilmwwBNC5b6bVV9LBpPdoWb8nHRTAAH4rJOx1by97qcjGchQycgVm6xNjiyDTKGhCdw/c+l/tkziEkeppoLM7/fI4GifJzDw3gbCZqkfsNmCNMGMWY0wycpoQBPn7v4meAS0hM=-----END PKCS7-----" />
                <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit"
                  alt="PayPal – The safer, easier way to pay online!" style={{ maxWidth: '107px', border: 0, padding: 0 }} />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
              </form>
            ) : (
                <p className={styles.paypalDisabledCopy}>Contact <a href="mailto:info@fionaross.co.uk?subject=Fiona Ross - Reflections in Blue">info@fionaross.co.uk</a> for details. <br /> Or, clear your browser cookies, disable any cookie blockers and reload the page to accept PayPal cookies.</p>
            )}
          </div>
        </div>

      </div>

    </div>
  </PageContainer>
);

export default ReflectionsInBluePage;
