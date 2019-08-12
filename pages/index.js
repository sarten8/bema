import Head from 'next/head'
import Layout from '../components/MyLayout'
import Home from './home'
import About from './about'
import Works from './works'
import Contact from './contact'

export default function Index() {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/static/triangle.png" />
        <title>b.</title>
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <Home />
      <About />
      <Works />
      <Contact />
    </Layout>
  )
}
