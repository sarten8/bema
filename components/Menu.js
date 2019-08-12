import { useState, useEffect } from 'react'
import Link from 'next/link'
import css from '../styles/styles.css'

export default ({ menuStatus, menuActive }) => {
  const [open, setOpen] = useState(menuStatus ? menuStatus : false)

  const updateActive = () => {
    if (open) setOpen(false)
    else setActive(true)
    menuActive()
  }

  const _handleClick = () => {
    updateActive()
  }

  useEffect(() => {
    if (open !== menuStatus) setOpen(menuStatus)
  }, [menuStatus])

  return open ? (
    <div className={css.menu}>
      <Link href="/">
        <a
          className={css.link}
          onClick={_handleClick}
        >
          HOME
        </a>
      </Link>
      <Link href="/#about">
        <a
          className={css.link2}
          onClick={_handleClick}
        >
          ABOUT
        </a>
      </Link>
      <Link href="/#work">
        <a
          className={css.link}
          onClick={_handleClick}
        >
          WORK
        </a>
      </Link>
      <Link href="/#contact">
        <a
          className={css.link2}
          onClick={_handleClick}
        >
          CONTACT
        </a>
      </Link>
    </div>
  ) : (
    ''
  )
}
