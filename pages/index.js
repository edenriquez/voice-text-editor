import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    static async getInitialProps (ctx) {
      return await Document.getInitialProps(ctx)
    }
render () {
    return (
        <html>
        <Head>
          <title>Speech Recog</title>
          <link href="/static/stylesheets/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/lib/main.js"></script>
        </body>
      </html>
    )
  }
}