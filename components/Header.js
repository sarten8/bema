import { useState } from 'react'
import Link from 'next/link'
import css from '../styles/styles.css'
import MenuIcon from './MenuIcon'
import Menu from './Menu'

export default function Header() {
  const [active, setActive] = useState(false)

  const updateActive = () => {
    if (active) setActive(false)
    else setActive(true)
  }

  return (
    <div
      className={css.header}
    >
      <Link href="/">
        <a className={css.logo}>b.</a>
      </Link>
      <MenuIcon menuStatus={active} menuActive={updateActive} />
      <Menu menuStatus={active} menuActive={updateActive} />
    </div>
  )
}
