import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>react aframe demo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
