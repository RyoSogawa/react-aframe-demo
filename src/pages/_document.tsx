import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://aframe.io/releases/1.2.0/aframe.min.js" />
          <script
            type="text/javascript"
            src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
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
