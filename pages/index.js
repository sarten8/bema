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
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Advent+Pro|Archivo+Black|Oswald&display=swap" rel="stylesheet" /> 
        <title>b.</title>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Home />
      <About />
      <Works />
      <Contact />
    </Layout>
  )
}
