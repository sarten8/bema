import css from '../styles/styles.css'
import Link from 'next/link'

export default () => (
  <section className={css.about} id="about">
    <p>Hi, I'm B!</p>
    <div className={css.goWorkContainer}>
      <Link href="/#work">
        <span className={css.arrow}>&#8623;</span>
      </Link>
    </div>
  </section>
)
