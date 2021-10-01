import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>

        <Head>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', '${process.env.GOOGLE_ANALYTICS}', 'auto', {
                  'cookieExpires': 0,
                  'storage': 'none'
                });
                ga('set', 'anonymizeIp', true);
              `,
            }}
          />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}

export default MyDocument
