import Head from 'next/head';
import '../assets/styles/globals.css';
import '../assets/styles/index.css';
import Layout from '../assets/components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PcariMovie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp
