import Layout from '../components/MyLayout'
import Home from './home'
import About from './about'
import Works from './works'

export default function Index() {
  return (
    <Layout>
      <Home />
      <About />
      <Works />
    </Layout>
  )
}
