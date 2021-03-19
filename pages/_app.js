import '@styles/globals.scss'
import '@styles/nprogress.scss'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Layout from '@components/Layout'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ easing: 'ease-in-out', speed: 750 });

function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Lucian-DEV -- Freelance Front-end Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <link rel="shortcut icon" href="/favicon.png"/>
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps}/>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default MyApp
