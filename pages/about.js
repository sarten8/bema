import css from '../styles/styles.css'
import Link from 'next/link'

export default () => (
  <section className={css.about} id="about">
    <p>Hi, I'm B!</p>
    <div>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
    </div>
    <div className={css.stars} />
    <div className={css.stars2} />
    <div className={css.stars3} />
    <div className={css.goWorkContainer}>
      <Link href="/#work">
        <span className={css.arrow}>&#8623;</span>
      </Link>
    </div>
  </section>
)
