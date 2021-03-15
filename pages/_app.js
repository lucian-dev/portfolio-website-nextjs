import '../styles/globals.scss'
import '../styles/nprogress.scss'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
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
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps}/>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
