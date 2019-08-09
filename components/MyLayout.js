import css from '../styles/styles.css'
import Header from './Header'

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
