import React, { useState, useEffect } from 'react'
import css from '../styles/styles.css'

export default ({ menuStatus, menuActive }) => {
  const [active, setActive] = useState(false)

  const updateActive = () => {
    if (active) setActive(false)
    else setActive(true)
    menuActive()
  }

  useEffect(() => {
    if (active !== menuStatus) setActive(menuStatus)
  }, [menuStatus])

  return (
    <div
      className={css.icon}
      onClick={updateActive}
    >
      <span className={active ? css.span1active : css.span1} />
      <span className={active ? css.span2active : css.span2} />
    </div>
  )
}
