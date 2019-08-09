import Link from 'next/link'
import css from '../styles/styles.css'

export default function Header() {
  return (
    <div className={css.header}>
      <Link href="/">
        <a className={css.logo}>b.</a>
      </Link>
      <div className={css.icon}>
        <span className={css.span1} />
        <span className={css.span2} />
      </div>
    </div>
  )
}
