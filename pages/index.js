import Head from 'next/head'
import Layout from '../components/MyLayout'
import Home from './home'
import About from './about'
import Works from './works'

export default function Index() {
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/static/triangle.png" />
        <title>b.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <Home />
      <About />
      <Works />
    </Layout>
  )
}
